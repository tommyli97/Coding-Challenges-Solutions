// problem link: https://www.codewars.com/kata/52fba2a9adcd10b34300094c

// time complexity: O(n^2)

function transpose(matrix) {
    let arr = [];
    for (var i = 0; i < matrix[0].length; i++) {
        let temp = [];
        for (var j = 0; j < matrix.length; j++) {
            temp.push(matrix[j][i]);
        }
        arr.push(temp);
    }
    return arr;
}