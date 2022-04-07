// problem link: https://www.codewars.com/kata/54da5a58ea159efa38000836

// time complexity: O(n)

function findOdd(num) {
    //happy coding!
    num.sort((a, b) => a - b);

    //create counter
    let count = 1;

    for (let i = 0; i < num.length; i++) {
        if (num[i + 1] == num[i]) {
            count++;
        } else {
            if (count % 2 == 1) {
                return num[i];
            }
            count = 1;
        }
    }
}