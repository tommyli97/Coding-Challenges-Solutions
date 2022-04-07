// problem link: https://www.codewars.com/kata/53dbd5315a3c69eed20002dd

// time complexity: O(n)

function filter_list(l) {
    // Return a new array with the strings filtered out
    for (var i = 0; i < l.length; i++) {
        if (typeof l[i] !== 'number') {
            l.splice(i, 1)
            i--;
        }
    }
    return l;
}