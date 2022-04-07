// problem link: https://www.codewars.com/kata/525f50e3b73515a6db000b83

// time complexity: O(1)

function createPhoneNumber(numbers) {
    let output = ['(', numbers[0], numbers[1], numbers[2], ') ', numbers[3], numbers[4], numbers[5], '-', numbers[6], numbers[7], numbers[8], numbers[9]];
    return output.join('');
}