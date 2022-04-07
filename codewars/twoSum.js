// problem link: https://www.codewars.com/kata/52c31f8e6605bcc646000082

// time complexity: O(n)

function twoSum(numbers, target) {
    let obj = {};

    for (let [index, num] of numbers.entries()) {
        if (obj[num] !== undefined) return [obj[num], index];
        obj[target - num] = index;
    }
}