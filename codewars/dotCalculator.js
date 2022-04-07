// problem link: https://www.codewars.com/kata/6071ef9cbe6ec400228d9531

// time complexity: O(n)

function dotCalculator(equation) {
    let arr = equation.split(' ');
    let string = '';
    switch (arr[1]) {
        case '+':
            let sum = arr[0].length + arr[2].length;
            for (var i = 0; i < sum; i++) {
                string += '.';
            }
            return string;
        case '-':
            let diff = arr[0].length - arr[2].length;
            for (var i = 0; i < diff; i++) {
                string += '.';
            }
            return string;
        case '*':
            let product = arr[0].length * arr[2].length;
            for (var i = 0; i < product; i++) {
                string += '.';
            }
            return string;
        case '//':
            let quote = Math.floor(arr[0].length / arr[2].length);
            for (var i = 0; i < quote; i++) {
                string += '.';
            }
            return string;

    }
}