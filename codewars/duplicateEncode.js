// problem link: https://www.codewars.com/kata/54b42f9314d9229fd6000d9c

// time complexity: O(n)

function duplicateEncode(text) {
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
    let output = '';
    for (var j = 0; j < lowerCase.length; j++) {
        if (obj[lowerCase[j]] == 1) {
            output += '(';
        } else {
            output += ')';
        }
    }
    return output;
}