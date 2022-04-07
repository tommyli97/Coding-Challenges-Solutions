// problem link: https://www.codewars.com/kata/526571aae218b8ee490006f4

// time complexity: O(n)

var countBits = function (n) {
    // Program Me
    let string = n.toString(2);
    let count = 0;
    for (var i = 0; i < string.length; i++) {
        if (string[i] == 1) {
            count++;
        }
    }
    return count;
};