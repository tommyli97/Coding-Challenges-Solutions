// problem link: https://www.codewars.com/kata/51fc12de24a9d8cb0e000001

// time complexity: O(n)

function validISBN10(isbn) {
    if (isbn.length !== 10) {
        return false;
    }

    let sum = 0;
    for (var i = 0; i < isbn.length; i++) {
        if (isbn[i].toLowerCase() == 'x') {
            sum += 10 * (i + 1);
            break;
        }
        sum += isbn[i] * (i + 1);
    }
    return (sum % 11 == 0) ? true : false;
}