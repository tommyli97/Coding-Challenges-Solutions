// problem link: https://www.codewars.com/kata/58cb43f4256836ed95000f97

// time complexity: O(1)

function findDifference(a, b) {
    return Math.abs(a[0] * a[1] * a[2] - b[0] * b[1] * b[2])
}