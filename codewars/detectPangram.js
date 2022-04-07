// problem link: https://www.codewars.com/kata/545cedaa9943f7fe7b000048

// time complexity: O(1)

function isPangram(string) {
    let upperCase = string.toUpperCase();
    let regex = /[A-Z]/g;
    let found = upperCase.match(regex);

    let set = new Set(found);

    return set.size == 26;
}