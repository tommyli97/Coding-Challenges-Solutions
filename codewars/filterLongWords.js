// problem link: https://www.codewars.com/kata/5697fb83f41965761f000052

// time complexity: O(n)

function filterLongWords(sentence, n) {
    //Solution here
    let arr = sentence.split(' ');
    let output = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].length > n) {
            output.push(arr[i]);
        }
    }
    return output;
}