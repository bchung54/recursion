const mergeSort = (arr) => {
    const size = arr.length;
    const half = Math.round(arr.length / 2);
    if (size < 2) {
        return arr;
    }
    return merge(mergeSort(arr.slice(0, half)), mergeSort(arr.slice(half)));
}

const merge = (arr1, arr2) => {
    if (arr1.length == 0) {
        return arr2;
    }
    if (arr2.length == 0) {
        return arr1;
    }
    if (arr1[0] < arr2[0]){
        return [arr1[0]].concat(merge(arr1.slice(1), arr2));
    }
    return [arr2[0]].concat(merge(arr2.slice(1), arr1));
}

export default mergeSort;