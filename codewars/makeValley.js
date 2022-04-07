// problem link: https://www.codewars.com/kata/56e3cd1d93c3d940e50006a4

// time complexity: O(n)

function makeValley(arr) {
    arr.sort((a, b) => a - b);
    let leftWing = [];
    let rightWing = [];
    while (arr.length > 1) {
        leftWing.push(arr.pop());
        rightWing.unshift(arr.pop());
    }
    if (arr.length == 1) {
        leftWing.push(arr[0]);
    }
    return leftWing.concat(rightWing);
}