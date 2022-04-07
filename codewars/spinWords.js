// problem link: https://www.codewars.com/kata/5264d2b162488dc400000001

// time complexity: O(n)

function spinWords(string) {
    //TODO Have fun :)
    let arr = string.split(' ');
    for (var i = 0; i < arr.length; i++) {
        if (arr[i].length >= 5) {
            arr[i] = arr[i].split('').reverse().join('');
        }
    }
    return arr.join(' ');
}