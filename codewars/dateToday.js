// problem link: https://www.codewars.com/kata/563c13853b07a8f17c000022

// time complexity: O(1)

function isToday(date) {
    //Code goes here.
    let string = JSON.stringify(date).slice(1, 11);
    let day = JSON.stringify(new Date()).slice(1, 11);
    return string == day;
}