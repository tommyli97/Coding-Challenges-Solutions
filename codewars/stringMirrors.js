// problem link: https://www.codewars.com/kata/56dbe0e313c2f63be4000b25

// time complexity: vertMirror & horMirror: O(n)         oper: O(1) 

function vertMirror(strng) {
    // Your code
    //iterate through every index of input array
    for (let i = 0; i < strng.length; i++) {
        strng[i] = strng[i].split("").reverse().join("");
    }
    return strng;
}
function horMirror(strng) {
    // Your code
    return strng.reverse();
}

function oper(fct, s) {
    //use split to create array from string s
    let arr = s.split('\n');
    if (fct == vertMirror) {
        arr = vertMirror(arr);
    } else if (fct == horMirror) {
        arr = horMirror(arr);
    }
    return arr.join('\n');
}