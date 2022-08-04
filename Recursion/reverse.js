function reverse(s1) {
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
  return reverseArr.join();
}

console.log(reverse("awesome"));
