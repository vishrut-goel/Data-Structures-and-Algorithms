// function selectionSort(arr) {
//     for (let i = 0; i < arr.length - 1; i++) {
//         let min = arr[i];
//         let minIndex = i;
//         let noSwaps = false;
//         for (let j = i + 1; j < arr.length; j++) {
//             if (arr[j] < min) {
//                 min = arr[j];
//                 minIndex = j;
//                 noSwaps = true;
//             }
//         }
//         if (noSwaps) {
//             arr[minIndex] = arr[i];
//             arr[i] = min;
//         }

//     }
//     return arr;

// }

function selectionSort(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        let min = i;
        let noSwaps = false;
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[min]) {
                min = j;
                noSwaps = true;
            }
        }
        if (noSwaps) {
            let temp = arr[min];
            arr[min] = arr[i];
            arr[i] = temp;
        }

    }
    return arr;

}

console.log(selectionSort([15,38,5,19,47,44]));
console.log(selectionSort([2, 8, 1, 3, 6, 7, 5, 4]));

