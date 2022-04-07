// problem link: https://www.codewars.com/kata/5324945e2ece5e1f32000370

// time complexity: O(1)

function sumStrings(a, b) {
    if (a == '') {
        return b;
    } else if (b == '') {
        return a;
    }
    let first = BigInt(a);
    let second = BigInt(b);

    return (first + second).toString();
}