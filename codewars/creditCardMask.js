// problem link: https://www.codewars.com/kata/5412509bd436bd33920011bc

// time complexity: O(n)

function maskify(cc) {
    if (cc.length <= 4) {
        return cc;
    }
    let hash = '#';
    let output = '';

    output += hash.repeat(cc.length - 4) + cc.substring(cc.length - 4);

    return output;
}