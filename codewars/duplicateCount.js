// problem link: https://www.codewars.com/kata/54bf1c2cd5b56cc47f0007a1

// time complexity: O(n)

function duplicateCount(text) {
    let lowerCase = text.toLowerCase();
    let obj = {};
    for (var i = 0; i < lowerCase.length; i++) {
        let currentLetter = lowerCase[i];
        if (obj[currentLetter] == undefined) {
            obj[currentLetter] = 1;
        } else {
            obj[currentLetter]++;
        }
    }
    let count = 0;
    for (let key in obj) {
        if (obj[key] > 1) {
            count++;
        }
    }
    return count;
}