// problem link: https://www.codewars.com/kata/5503013e34137eeeaa001648

// time complexity: O(n^2)

function diamond(n) {
    if (n % 2 == 0 || n < 1) {
        return null;
    }

    let output = [];
    for (var i = 0; i < n / 2; i++) {
        let string = '';
        for (var j = 0; j < Math.floor(n / 2 - i); j++) {
            string += ' ';
        }
        for (var k = 0; k < 1 + (2 * i); k++) {
            string += '*';
        }
        output.push(string);
    }

    for (var i = output.length - 2; i >= 0; i--) {
        output.push(output[i]);
    }

    output[output.length - 1] += '\n';

    return output.join('\n');
}