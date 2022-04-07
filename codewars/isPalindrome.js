// problem link: https://www.codewars.com/kata/57a1fd2ce298a731b20006a4

// time complexity: O(n)

function isPalindrome(x) {
    // your code here
    for (var i = 0; i < x.length; i++) {
        if (x[i].toUpperCase() !== x[x.length - 1 - i].toUpperCase()) {
            return false;
        }
    }
    return true;
}