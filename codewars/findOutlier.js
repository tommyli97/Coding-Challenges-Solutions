// problem link: https://www.codewars.com/kata/5526fc09a1bbd946250002dc

// time complexity: O(n)

function findOutlier(integers) {
    //your code here
    let counter = 0;
    for (var i = 0; i < 3; i++) {
        if (Math.abs(integers[i] % 2) == 0) {
            counter++;
        } else {
            counter--;
        }
    }

    for (var j = 0; j < integers.length; j++) {
        if (counter > 0 && Math.abs(integers[j] % 2) == 1) {
            // console.log('should be odd');
            // console.log(counter);
            return integers[j];
        }
        if (counter < 0 && integers[j] % 2 == 0) {
            // console.log('should be even');
            // console.log(counter);
            return integers[j];
        }
    }
}