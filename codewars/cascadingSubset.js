// problem link: https://www.codewars.com/kata/545af3d185166a3dec001190

// time complexity: O(n)

function eachCons(array, n) {
    let arr = [];
    for (var i = 0; i <= array.length - n; i++) {
        let slice = array.slice(i, i + n);
        arr.push(slice);
    }
    return arr;
}