// problem link: https://www.codewars.com/kata/57f781872e3d8ca2a000007e

// time complexity: O(n)

function maps([firstNum, ...rest]) {
    const restDoubled = rest.length ? maps(rest) : [];
    return [firstNum * 2, ...restDoubled];
}