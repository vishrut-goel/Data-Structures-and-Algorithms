function insertionSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j > 0; j--) {
            if (arr[j] < arr[j - 1]) {
                let temp = arr[j];
                arr[j] = arr[j - 1];
                arr[j - 1] = temp;
            }
        }

    }
    return arr;
}

console.log(insertionSort([15, 38, 5, 19, 47, 44]));
console.log(insertionSort([2,1,9,76,4]));
console.log(insertionSort([4,2,-5,6,1,1,8,13,10]));
