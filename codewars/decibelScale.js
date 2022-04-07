// problem link: https://www.codewars.com/kata/5612a42e746aa62de100001a

// time complexity: O(1)

function dBScale(intensity) {
    return 10 * (Math.log10(intensity / (Math.pow(10, -12))))
}