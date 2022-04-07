// problem link: https://www.codewars.com/kata/5656b6906de340bd1b0000ac

// time complexity: O(1)

function longest(s1, s2) {
    // your code
    let arr = (s1 + s2).split('');
    const letters = new Set(arr);
    return Array.from(letters).sort().join('');
}