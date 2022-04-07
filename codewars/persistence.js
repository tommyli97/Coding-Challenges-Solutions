// problem link: https://www.codewars.com/kata/55bf01e5a717a0d57e0000ec

// time complexity: O(n)

function persistence(num) {
    let arr = num.toString().split('');
    if (arr.length <= 1) {
        return 0;
    }

    let product = 1;
    for (var i = 0; i < arr.length; i++) {
        product *= arr[i];
    }

    if (product.toString().length == 1) {
        return 1;
    } else {
        return 1 + persistence(product);
    }

    return count;
}