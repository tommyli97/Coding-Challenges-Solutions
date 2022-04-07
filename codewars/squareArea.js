// problem link: https://www.codewars.com/kata/5748838ce2fab90b86001b1a

// time complexity: O(1)

function squareArea(A) {
    let radius = A * 2 / Math.PI;
    let area = radius ** 2;
    let twoPlaces = area.toFixed(2);
    return parseFloat(twoPlaces);
}