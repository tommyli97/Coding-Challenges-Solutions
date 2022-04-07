// problem link: https://www.codewars.com/kata/602afedfd4a64d0008eb4e6e

// time complexity: O(n)

function getDay(day, isLeap) {
    let months = { 'January': 31, 'February': 28, 'March': 31, 'April': 30, 'May': 31, 'June': 30, 'July': 31, 'August': 31, 'September': 30, 'October': 31, 'November': 30, 'December': 31, };

    if (isLeap) {
        months.February = 29;
    }

    let tempKey = '';
    for (let key in months) {
        if (day > months[key]) {
            day -= months[key];
        } else if (day == months[key]) {
            return key + ', ' + day;
        } else {
            return key + ', ' + day;
        }
    }
}