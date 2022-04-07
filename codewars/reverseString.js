// problem link: https://www.codewars.com/kata/5168bb5dfe9a00b126000018

// time complexit: O(n)

function solution(str) {
    let newStr = str.split('');
    for (var i = 0; i < Math.ceil(str.length / 2); i++) {
        let temp = str[i];
        newStr[i] = newStr[str.length - 1 - i];
        newStr[str.length - 1 - i] = temp;
    }
    return newStr.join('');
}
