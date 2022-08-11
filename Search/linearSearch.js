//Linear Search

function linearSearch(array, value) {
  for (const element of array) {
    if (element === value) {
      return array.indexOf(element);
    }
  }
  return -1;
}

console.log(linearSearch([9, 8, 7, 6, 5, 4, 3, 2, 1, 0], 4));