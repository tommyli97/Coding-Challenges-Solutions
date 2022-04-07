// problem link: https://www.codewars.com/kata/585b1fafe08bae9988000314

// time complexity: O(n^2)

function explode(s) {
    let string = '';
    for (var i = 0; i < s.length; i++) {
        for (var j = 0; j < parseInt(s[i]); j++) {
            string += s[i];
        }
    }
    return string;
}