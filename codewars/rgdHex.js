// problem link: https://www.codewars.com/kata/513e08acc600c94f01000001

// time complexity: O(1)

function rgb(r, g, b) {
    function decToHex(x) {
        if (x >= 255) return 'FF';
        if (x <= 0) return '00';
        return x.toString(16).padStart(2, '0').toUpperCase();
    }
    return decToHex(r) + decToHex(g) + decToHex(b);
}