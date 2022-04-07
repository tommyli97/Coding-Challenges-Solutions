// problem link: https://www.codewars.com/kata/541c8630095125aba6000c00

// time complexity: O(n)

function digital_root(n) {
    let arr = n.toString().split('');
    let result = 0;
    for (var i = 0; i < arr.length; i++) {
        result += parseInt(arr[i]);
    }
    if (result < 10) {
        return result;
    } else {
        return digital_root(result);
    }
}