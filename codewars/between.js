// problem link: https://www.codewars.com/kata/55ecd718f46fba02e5000029

// time complexity: O(n)

function between(a, b) {
    // your code here
    var arr = [];
    for (var i = a; i <= b; i++) {
        arr.push(i);
    }
    return arr;
}