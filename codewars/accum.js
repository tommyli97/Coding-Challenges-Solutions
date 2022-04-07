// problem link: https://www.codewars.com/kata/5667e8f4e3f572a8f2000039

// time complexity: O(n)

function accum(s) {
    let arr = s.split('');
    let output = '';
    for (var i = 0; i < arr.length; i++) {
        arr[i] = arr[i].toUpperCase() + arr[i].repeat(i).toLowerCase();
    }
    return arr.join('-');
}