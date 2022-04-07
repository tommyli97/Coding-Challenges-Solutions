// problem link: https://www.codewars.com/kata/60edafd71dad1800563cf933

// time complexity: O(1)

function counter() {
    var counter = 1;
    return function count() {
        return counter++;
    }
}