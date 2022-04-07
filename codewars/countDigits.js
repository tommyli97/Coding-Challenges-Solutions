// problem link: https://www.codewars.com/kata/566fc12495810954b1000030

// time complexity: O(n^2)

function nbDig(n, d) {
    // your code
    let counter = 0;
    for (var i = 0; i <= n; i++) {
        let squared = i ** 2;
        let str = squared.toString();
        for (var j = 0; j < str.length; j++) {
            if (str[j] == d) {
                counter++;
            }
        }
    }
    return counter;
}