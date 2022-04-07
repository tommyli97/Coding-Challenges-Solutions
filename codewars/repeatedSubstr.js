// problem link: https://www.codewars.com/kata/5491689aff74b9b292000334

// time complexity: O(n)

function f(s) {
    let arr = [];

    for (var i = 1; i <= s.length / 2; i++) {
        if (s.length % i == 0) {
            let timesRepeated = s.length / i;
            let string = '';
            let repeatedStr = s.substr(0, i);
            for (var j = 0; j < timesRepeated; j++) {
                string += repeatedStr;
            }
            if (string == s) {
                arr[0] = repeatedStr;
                arr[1] = timesRepeated;
                return arr;
            }
        }
    }
    arr[0] = s;
    arr[1] = 1;
    return arr;
}