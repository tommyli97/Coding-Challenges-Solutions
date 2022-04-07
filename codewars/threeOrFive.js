// problem link: https://www.codewars.com/kata/514b92a657cdc65150000006

// time complexity: O(n)

function solution(number) {
    if (number <= 0) {
        return 0;
    }

    let sum = 0;
    let i = 1;
    for (let i = 1; i < number; i++) {
        if (i % 3 == 0 || i % 5 == 0) {
            sum += i;
        }
    }
    return sum;
}