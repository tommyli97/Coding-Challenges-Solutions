// problem link: https://www.codewars.com/kata/563089b9b7be03472d00002b

// time complexity: O(n)

Array.prototype.remove_ = function (a, b) {
    let i = 0;
    while (a[i] !== undefined) {
        if (b.indexOf(a[i]) != -1) {
            a.splice(i, 1);
            i--;
        }
        i++;
    }
    return a;
}