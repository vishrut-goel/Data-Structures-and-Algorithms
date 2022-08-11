function merge(arr1, arr2) {
    let result = [];
    let i = 0;
    let j = 0;
    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] < arr2[j]) {
            result.push(arr1[i]);
            i++;
        } else {
            result.push(arr2[j]);
            j++;
        }
    }

    if (i === arr1.length) {
        for (let k = j; k < arr2.length; k++) {
            result.push(arr2[k]);
        }
    } else if (j === arr2.length) {
        for (let k = i; k < arr1.length; k++) {
            result.push(arr1[k]);
        }
    }
    return result;
}



function mergeSort(arr) {
    if (arr.length <= 1) {
        return arr;
    }

    let mid = Math.floor(arr.length / 2);
    let left = mergeSort(arr.slice(0, mid));
    let right = mergeSort(arr.slice(mid));
    return merge(left, right);
}

console.log(mergeSort([100, 2, 14, 20, 34, 40, 55, 70]));