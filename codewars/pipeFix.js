// problem link: https://www.codewars.com/kata/56b29582461215098d00000f

// time complexity: O(n)

function pipeFix(numbers) {
    let i = 0;
    let lastNum = numbers[numbers.length - 1]
    while (numbers[i] != lastNum) {
        if (numbers[i] + 1 !== numbers[i + 1]) {
            numbers.splice(i + 1, 0, (numbers[i] + 1));
        }
        i++;
    }
    return numbers;
}