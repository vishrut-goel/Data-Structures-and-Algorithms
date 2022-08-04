function factorialRecursive(num) {
  if (num === 1) {
    return 1;
  }
  return num * factorialRecursive(num - 1);
}

console.log(factorialRecursive(7));

// function factorialIterative(num) {
//   let factorial = 1;
//   for (let i = num; i > 1; i--) {
//     factorial = factorial * i;
//   }
//   return factorial;
// }

// console.log(factorialIterative(5));