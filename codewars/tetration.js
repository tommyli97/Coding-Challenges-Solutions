// problem link: https://www.codewars.com/kata/5797bbb34be9127074000132

// time complexity: O(n)

function tetration(x, y) {

    // your code here
    let result = 1;
    if (y == 0) {
        return result;
    }

    for (var i = 1; i <= y; i++) {
        result = Math.pow(x, result);
    }

    return result;
}