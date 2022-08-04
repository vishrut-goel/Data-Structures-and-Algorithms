// function someRecursive(arr, isOdd) {
//   if (arr.length === 0) {
//     return false;
//   }
//   if (isOdd(arr[0])) {
//     return true;
//   }
//   return someRecursive(arr.splice(1), isOdd);
// }

// const isOdd = (val) => val % 2 !== 0;

// console.log(someRecursive([1, 2, 3, 4], isOdd));
// console.log(someRecursive([4, 6, 8, 9], isOdd)); // true
// console.log(someRecursive([4, 6, 8, 10, 22], isOdd)); // false
// console.log(someRecursive([4,6,8], val => val > 10)); // false

//Linear Search

// function linearSearch(array, value) {
//   for (const element of array) {
//     if (element === value) {
//       return array.indexOf(element);
//     }
//   }
//   return -1;
// }

// console.log(linearSearch([9, 8, 7, 6, 5, 4, 3, 2, 1, 0], 4));

//Binary Search

function binarySearch(arr, val) {
  let left = 0;
  let right = arr.length - 1;
  let mid = Math.floor((left + right) / 2);

  while (left < right) {
    if (val === arr[mid]) {
      return mid;
    } else if (val < arr[mid]) {
      right = mid -1;
    } else {
      start = mid +1;
    }
    mid = Math.floor((left + right) / 2);
  }

  return -1;
}

console.log(
  binarySearch(
    [
      5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 40, 44, 64, 79, 84, 86, 95, 96, 98,
      99,
    ],
    10
  )
); // 2
