// problem link: https://www.codewars.com/kata/57f8ee485cae443c4d000127

// time complexity: O(n)

function spacify(str) {
    let arr = str.split('');
    for (var i = 0; i < arr.length - 1; i++) {
        arr[i] += ' ';
    }
    return arr.join('');
}