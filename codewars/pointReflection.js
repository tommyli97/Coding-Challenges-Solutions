// problem link: https://www.codewars.com/kata/57bfea4cb19505912900012c

// time complexity: O(1)

function symmetricPoint(p, q) {
    let output = [0, 0];
    output[0] = q[0] - p[0] + q[0];
    output[1] = q[1] - p[1] + q[1];
    return output;
}