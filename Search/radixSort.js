function radixSort(arr) {
    let maxDigit = mostDigits(arr);
    for (let k = 0; k < maxDigit; k++) {
        let digitBucket = Array.from({ length: 10 }, () => []);
        console.log(digitBucket);
        for (let i = 0; i < arr.length; i++) {
            let digit = getDigit(arr[i], k);
            digitBucket[digit].push(arr[i]);
        }
        arr = [].concat(...digitBucket);
    }
    return arr;
}

function getDigit(num, place) {
    let numStr = reverse(`${num}`);

    function reverse(str) {
        let splitString = str.split("");
        let reverseArray = splitString.reverse();
        var joinArray = reverseArray.join("");
        return joinArray;
    }

    return (+numStr[place]);
}

function digitCount(num) {

    let count = 1;

    let countRecursive = digitCountRecursive(num / 10);

    function digitCountRecursive(num) {
        if (num > 1) {
            count++;
            digitCountRecursive(num / 10);
        }
        return count;
    }
    return countRecursive;
}

function mostDigits(arr) {
    return digitCount(Math.max(...arr));
}

console.log(radixSort([1234, 56, 7, 345, 21, 4, 34562]));