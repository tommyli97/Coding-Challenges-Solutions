// problem link: https://www.codewars.com/kata/52774a314c2333f0a7000688

// time complexity: O(n)

function validParentheses(parens) {
    let open = 0;
    let close = 0;
    for (var i = 0; i < parens.length; i++) {
        switch (parens[i]) {
            case '(':
                open++;
                break;
            case ')':
                close++;
                break;
        }

        if (close > open) {
            return false;
        }
    }

    if (open == close) {
        return true;
    }
    return false;
}