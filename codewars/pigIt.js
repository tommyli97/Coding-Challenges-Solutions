// problem link: https://www.codewars.com/kata/520b9d2ad5c005041100000f

// time complexity: O(n)

function pigIt(str) {
    let arr = str.split(' ');
    let letters = /^[A-Za-z]+$/;
    for (var i = 0; i < arr.length; i++) {
        if (/^[a-zA-Z]/.test(arr[i])) {
            let firstLetter = arr[i][0];
            let tempArr = arr[i].split('');
            tempArr.shift();
            tempArr.push(firstLetter)
            arr[i] = tempArr.join('');
            arr[i] += 'ay';
        }
    }
    return arr.join(' ');
}