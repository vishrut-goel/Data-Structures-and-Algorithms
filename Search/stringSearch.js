function stringSearch(longStr, shortStr) {
    for (let i = 0; i < longStr.length; i++) {
        for (let j = 0; j < shortStr.length; j++) {
            if (longStr[i] !== shortStr[i + j]) {
                break;
            }
            if (j === shortStr.length - 1) {
                count++;
            }
        }
    }
    return count;
}