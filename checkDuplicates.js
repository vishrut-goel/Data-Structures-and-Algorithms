//Implement a function called, areThereDuplicates which accepts a variable number of arguments, and checks whether there are any duplicates among the arguments passed in.  You can solve this using the frequency counter pattern OR the multiple pointers pattern.

function areThereDuplicates() {
  let argumentsArr = [];
  for (let i = 0; i < arguments.length; i++) {
    argumentsArr.push(arguments[i]);
  }
  let argumentsObj = {};

  for (let i in argumentsArr) {
    argumentsObj[argumentsArr[i]] = (argumentsObj[argumentsArr[i]] || 0) + 1;
  }

  console.log(argumentsObj);

  for (let i in argumentsObj) {
    if (argumentsObj[i] > 1) {
      console.log("true");
      return true;
    }
  }
  console.log("false");
  return false;
}

areThereDuplicates(1, 2, 3); // false
areThereDuplicates(1, 2, 2); // true 
areThereDuplicates('a', 'b', 'c', 'a'); // true 
