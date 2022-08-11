function pivot(arr, start = 0, end = arr.length - 1) {
    let pivot = arr[start];
    let swpIndex = start;

    function swap(arr, idx1, idx2) {
        [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];

    }
    for (let i = start + 1; i <= end; i++) {
        if (pivot > arr[i]) {
            swpIndex++;
            swap(arr, swpIndex, i);
        }
    }
    swap(arr, start, swpIndex);
    return swpIndex;
}

function quickSort(arr, left = 0, right = arr.length - 1) {
    if (left < right) {
        let pivotIndex = pivot(arr, left, right);
        quickSort(arr, left, pivotIndex - 1);
        quickSort(arr, pivotIndex + 1, right);
    }
    return arr;
}

console.log(quickSort([28, 41, 4, 11, 16, 1, 40, 14, 36, 37, 42, 18]));
console.log(quickSort([4, 8, 2, 1, 5, 7, 6, 3]));