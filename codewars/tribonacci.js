// problem link: https://www.codewars.com/kata/556deca17c58da83c00002db

// time complexity: O(n)

function tribonacci(signature, n) {
    let arr = [];

    for (let i = 0; i < n; i++) {
        if (i < 3) {
            arr.push(signature[i]);
        } else {
            let sum = arr[i - 1] + arr[i - 2] + arr[i - 3];
            arr.push(sum);
        }
    }
    return arr;
}