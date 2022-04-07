// problem link: https://www.codewars.com/kata/5bb0c58f484fcd170700063d

// time complexity: O(1)

function pillars(num_pill, dist, width) {
    // your code here
    if (num_pill < 3) {
        return (num_pill - 1) * dist * 100;
    } else {
        return (num_pill - 1) * dist * 100 + (num_pill - 2) * width;
    }
}