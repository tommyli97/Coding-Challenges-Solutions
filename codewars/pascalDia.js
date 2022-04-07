// problem link: https://www.codewars.com/kata/576b072359b1161a7b000a17

// time complexity: O(n)

function generateDiagonal(n, r) {
    let arr = [];
    if (r == 0) {
        return arr;
    }
    for (var i = 0; i < r; i++) {
        let dividend = factorialize(n);
        let divisor = factorialize(i) * (factorialize(n - i));
        n++;
        if (divisor < 1) {
            divisor = 1;
        }
        arr.push(Math.round(dividend / divisor));;
    }
    return arr;
}

function factorialize(num) {
    if (num < 0)
        return -1;
    else if (num == 0)
        return 1;
    else
        return (num * factorialize(num - 1));
}