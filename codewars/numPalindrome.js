// problem link: https://www.codewars.com/kata/58ba6fece3614ba7c200017f

// time complexity: O(n)

function palindrome(num) {
    if (typeof num !== 'number' || num < 0) {
        return "Not valid";
    }
    let string = num.toString();
    for (var i = 0; i <= Math.floor(string.length / 2); i++) {
        if (string[i] !== string[string.length - 1 - i]) {
            return false;
        }
    }
    return true;
} 