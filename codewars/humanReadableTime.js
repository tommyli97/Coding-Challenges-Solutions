// problem link: https://www.codewars.com/kata/52685f7382004e774f0001f7

// time complexity: O(1) note: even though there's a for loop here, the max amount of time that for loop will run is always 3 since the outter array of arr always has 3 elements

function humanReadable(seconds) {
    let arr = [[0, 0], [0, 0], [0, 0]];
    if (seconds / 3600 >= 1) {
        arr[0][0] = Math.floor(seconds / 3600 / 10);
        arr[0][1] = Math.floor(seconds / 3600 % 10);
        seconds = seconds % 3600;
    }

    if (seconds / 60 >= 1) {
        arr[1][0] = Math.floor(seconds / 60 / 10);
        arr[1][1] = Math.floor(seconds / 60 % 10);
        seconds = seconds % 60;
    }

    arr[2][0] = Math.floor(seconds / 10);
    arr[2][1] = Math.floor(seconds % 10);

    for (var i = 0; i < arr.length; i++) {
        arr[i] = arr[i].join('');
    }
    return arr.join(':');
}