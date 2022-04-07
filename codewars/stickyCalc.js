// problem link: https://www.codewars.com/kata/5900750cb7c6172207000054

// time complexity: O(1)

function stickyCalc(operation, val1, val2) {
    // create a string variable that add's val1's digits and val2's digits
    let string = Math.round(val1).toString() + Math.round(val2).toString();
    // console.log(string);
    // use switch case to perform the rest of the operation
    switch (operation) {
        case '+':
            return Math.round(parseInt(string) + val2);
        case '-':
            return Math.round(parseInt(string) - val2);
        case '*':
            return Math.round(parseInt(string) * val2);
        case '/':
            return Math.round(parseFloat(string) / val2);
    }
}