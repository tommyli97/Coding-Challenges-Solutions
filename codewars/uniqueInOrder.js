// problem link: https://www.codewars.com/kata/54e6533c92449cc251001667

// time complexity: O(n)

var uniqueInOrder = function (iterable) {
    if (!Array.isArray(iterable)) {
        // console.log('not array');
        var arr = iterable.split('');
    } else {
        // console.log('array');
        var arr = iterable;
        // console.log(arr);
    }

    for (var i = 0; i < arr.length; i++) {
        if (arr[i] == arr[i + 1]) {
            arr.splice(i, 1);
            i--;
        }
    }
    return arr;
}