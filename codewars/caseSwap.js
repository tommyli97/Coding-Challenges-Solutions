// problem link: https://www.codewars.com/kata/5590961e6620c0825000008f

// time complexity: O(n)

function swap(str) {
    let arr = str.split('');
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] == arr[i].toUpperCase()) {
            arr[i] = arr[i].toLowerCase();
        } else if (arr[i] == arr[i].toLowerCase()) {
            arr[i] = arr[i].toUpperCase();
        }
    }
    return arr.join('');
}