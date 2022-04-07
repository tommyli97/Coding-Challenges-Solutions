// problem link: https://www.codewars.com/kata/58ca658cc0d6401f2700045f

// time complexity: O(n)

function findMultiples(integer, limit) {
    let arr = [];
    let i = 1;
    while (integer * i <= limit) {
        arr.push(integer * i);
        i++;
    }
    return arr;
}