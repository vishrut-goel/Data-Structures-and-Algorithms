function minSubarrayLen(arr, num) {
  if (arr.length < num) {
    return false;
  }

  let maxSum = 0;
  let tempSum = 0;

  for (let i = 0; i < num; i++) {
    minSum += arr[i];
  }

  tempSum = minSum;

  for (let i = num; i < arr.length - 1; i++) {
    tempSum = tempSum - arr[i - num] + arr[i];
    minSum = Math.min(maxSum, tempSum);
  }
  console.log(minSum);
  return minSum;
}
