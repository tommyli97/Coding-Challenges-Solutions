// problem link: https://www.codewars.com/kata/523f5d21c841566fde000009

// time complexity: O(n^2)

function arrayDiff(a, b) {
    for (var i = 0; i < b.length; i++) {
        while (a.indexOf(b[i]) !== -1) {
            a.splice(a.indexOf(b[i]), 1);
        }
    }
    return a;
}