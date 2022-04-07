// problem link: https://www.codewars.com/kata/52597aa56021e91c93000cb0

// time complexity: O(n)

function moveZeros(arr) {
    let zeros = 0;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] === 0) {
            arr.splice(i, 1);
            i--;
            zeros++;
        }
    }

    for (var j = 0; j < zeros; j++) {
        arr.push(0);
    }
    return arr;
}