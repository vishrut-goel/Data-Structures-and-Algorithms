function isPalindrome(s1) {
  let arrOfS1 = s1.split("");
  let reverseArr = [];
  function reverseString(arrOfS1) {
    if (arrOfS1.length === 0) {
      return;
    }
    reverseArr.push(arrOfS1.pop());
    reverseString(arrOfS1);
  }
  reverseString(arrOfS1);
  let newString = reverseArr.join("");

  if (newString === s1) {
    return true;
  } else {
    return false;
  }
}

console.log(isPalindrome('awesome')) // false
console.log(isPalindrome('foobar')) // false
console.log(isPalindrome('tacocat')) // true
console.log(isPalindrome('amanaplanacanalpanama')) // true
console.log(isPalindrome('amanaplanacanalpandemonium'))// false
