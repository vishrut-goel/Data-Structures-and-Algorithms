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