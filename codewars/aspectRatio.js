// problem link: https://www.codewars.com/kata/596e4ef7b61e25981200009f

// time complexity: O(1)

function aspectRatio(x, y) {
    let arr = [x, y];
    arr[0] = Math.ceil((16 / 9) * y);
    return arr;
}