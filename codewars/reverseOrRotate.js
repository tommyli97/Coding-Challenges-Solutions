// problemlink : https://www.codewars.com/kata/56b5afb4ed1f6d5fb0000991/train/javascript

// time complexity: O(n^2)

function revrot(str, sz) {
    let arr = [];
    let i = 0;
    while (str[i + sz - 1] != undefined) {
        arr.push(str.substr(i, sz));
        i += sz;
    }

    for (let i = 0; i < arr.length; i++) {
        let sum = 0;
        for (let j = 0; j < arr[i].length; j++) {
            sum += parseInt(arr[i][j] ** 3);
        }
        // console.log(sum);
        if (sum % 2 == 0) {
            // if the sum of the cubes of the digits is even, reverse the chunk
            let tempArr = arr[i].split('').reverse();
            arr[i] = tempArr.join('');
        } else {
            // if the sum of the cubes of the digits is odd, rotate the digits left by 1 position
            let tempArr = arr[i].split('');
            let temp = tempArr.shift();
            tempArr.push(temp);
            arr[i] = tempArr.join('');
        }
    }

    if (arr.length == 0) {

    }
    return arr.join('');
}