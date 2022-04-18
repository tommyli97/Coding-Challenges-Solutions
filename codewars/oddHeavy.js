// problem link: https://www.codewars.com/kata/59c7e477dcc40500f50005c7

// time complexity: O(n^2) note: the time complexity will rarely be O(n^2), it's just the worse case

function isOddHeavy(n) {
    let odds = n.filter(number => number % 2 !== 0).sort((a, b) => a - b);
    let even = Math.max(...n.filter(number => number % 2 == 0));
    if (odds.length == 0) {
        return false;
    }

    return odds[0] > even;
}