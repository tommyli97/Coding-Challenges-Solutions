// problem link: https://www.codewars.com/kata/517abf86da9663f1d2000003

// time complexity: O(n)

function toCamelCase(str) {
    if (str == '') {
        return '';
    }
    let arr = [];
    if (str.indexOf('-') !== -1) {
        arr = str.split('-');
    } else if (str.indexOf('_') !== -1) {
        arr = str.split('_');
    }
    for (let i = 1; i < arr.length; i++) {
        let letters = arr[i].split('');
        letters[0] = letters[0].toUpperCase();
        arr[i] = letters.join('');
    }
    return arr.join('');
}