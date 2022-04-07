// problem link: https://www.codewars.com/kata/55908aad6620c066bc00002a

// time complexity: O(n)

function XO(str) {
    let lower = str.toLowerCase();
    let x = 0;
    let o = 0;
    for (var i = 0; i < lower.length; i++) {
        if (lower[i] == 'x') {
            x++;
        } else if (lower[i] == 'o') {
            o++
        }
    }
    if (x == o) {
        return true;
    }
    return false;
}
