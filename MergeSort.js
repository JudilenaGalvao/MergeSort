let tam = [4, 5, 1, 8, 2, 6];

var MergeSort = function(array) {
    if (array.length === 1) {
        return array;
    }

    const meio = Math.floor(array.length / 2);

    const esq = array.slice(0, meio);
    const dir = array.slice(meio, array.length);

    return Merge(MergeSort(esq), MergeSort(dir));
};

var Merge = function(esq, dir) {
    let resul = [];
    let indEsq = 0;
    let indDir = 0;

    while (indEsq < esq.length && indDir < dir.length) {
        if (esq[indEsq] < dir[indDir]) {
            resul.push(esq[indEsq]);
            indEsq++;
        } else {
            resul.push(dir[indDir]);
            indDir++;
        }
    }

    while (indEsq < esq.length) {
        resul.push(esq[indEsq]);
        indEsq++;
    }

    while (indDir < dir.length) {
        resul.push(dir[indDir]);
        indDir++;
    }

    return resul;
};

console.log(MergeSort(tam));