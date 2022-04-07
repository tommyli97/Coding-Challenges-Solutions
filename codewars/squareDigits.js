// problem link: https://www.codewars.com/kata/546e2562b03326a88e000020

// time complexity: O(n)

function squareDigits(num) {
    //turn num into string
    var string = num.toString();

    //split num string into an array with single digits
    let arr = string.split('');

    //use forloop to turn each element in the array into number and then square it and then turn it back to string for string concatination
    let square = 0;
    for (let i = 0; i < arr.length; i++) {
        console.log(i);
        square = parseInt(arr[i]) * parseInt(arr[i]);
        console.log(square);
        arr[i] = square.toString();
    }

    //use join method to join every number in the array then turn the whole string back to number to return it
    return parseInt(arr.join(''));
}