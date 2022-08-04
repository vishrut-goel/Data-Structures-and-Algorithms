//Write a function called isSubsequence which takes in two strings and checks whether the characters in the first string form a subsequence of the characters in the second string. In other words, the function should check whether the characters in the first string appear somewhere in the second string, without their order changing.

function isSubsequence(s1, s2) {
  let s1Arr = s1.split("");
  let s2Arr = s2.split("");
  let begin2 = 0;
  while (s1Arr.length !== 0 && begin2 < s2Arr.length) {
    if (s1Arr[0] === s2Arr[begin2]) {
      s1Arr.splice(0, 1);
      begin2++;
    } else {
      begin2++;
    }
  }

  if (s1Arr.length == 0) {
    console.log("true");
  } else {
    console.log("false");
    return false;
  }
}

isSubsequence("hello", "hello world"); // true
isSubsequence("sing", "stign"); // true
isSubsequence("abc", "abracadabra"); // true
isSubsequence("abc", "acb"); // false (order matters)
