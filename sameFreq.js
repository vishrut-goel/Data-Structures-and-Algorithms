
//Write a function called sameFrequency. Given two positive integers, find out if the two numbers have the same frequency of digits.

function sameFrequency(num1, num2) {
  let s1 = num1.toString();
  let s2 = num2.toString();

  if (s1.length !== s2.length) {
    console.log('false');
    return false;
  }

  let freqCounter1 = {};
  let freqCounter2 = {};

  for (let i in s1) {
    freqCounter1[s1[i]] = (freqCounter1[s1[i]] || 0) + 1;
  }

  for (let j in s2) {
    freqCounter2[s2[j]] = (freqCounter2[s2[j]] || 0) + 1;
  }

  //console.log(freqCounter1);
  //console.log(freqCounter2);

  for (let key in freqCounter1) {
    if (!(key in freqCounter2)) {
      console.log('false');
      return false;
    }

    if (freqCounter2[key] !== freqCounter1[key]) {
      console.log('false');
      return false;
    }
  }
  console.log('true');
  return true;
}

sameFrequency(182,281); // true
sameFrequency(34,14); // false
sameFrequency(3589578, 5879385); // true
sameFrequency(22,222); // false

