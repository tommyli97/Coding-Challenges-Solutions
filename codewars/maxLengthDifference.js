// problem link: https://www.codewars.com/kata/5663f5305102699bad000056

// time complexity: O(n log n) note: this problem utilize quicksort, so it ditates the average runtime, which is n * log n

function mxdiflg(a1, a2) {
    if (a1.length == 0 || a2.length == 0) {
        return -1;
    }
    a1.sort((a, b) => a.length - b.length);
    a2.sort((a, b) => a.length - b.length);
    let maxLength = 0;
    if (Math.abs(a1[0].length - a2[a2.length - 1].length) > Math.abs(a1[a1.length - 1].length - a2[0].length)) {
        maxLength = Math.abs(a1[0].length - a2[a2.length - 1].length);
    } else {
        maxLength = Math.abs(a1[a1.length - 1].length - a2[0].length);
    }
    return maxLength;
}