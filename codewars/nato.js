// problem link: https://www.codewars.com/kata/586538146b56991861000293

// time complexity: O(n)

function to_nato(words) {
    let pattern = /\s/g;
    let noSpace = words.replace(pattern, '');
    let array = noSpace.split('').map(letter => {
        if (/[a-zA-Z]/.test(letter)) {
            const lowerCase = letter.toLowerCase();
            return NATO[lowerCase];
        } else {
            return letter;
        }
    });

    return array.join(' ');
}