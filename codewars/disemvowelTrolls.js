// problem link: https://www.codewars.com/kata/52fba66badcd10859f00097e

// time complexity: O(n)

function disemvowel(str) {
    //list of vowels, array?
    let vowels = ['a', 'e', 'i', 'o', 'u']
    //turn string into an array
    let stringArray = str.split('');
    //for loop, checking each position for a vowel - foreach?
    for (let i = 0; i <= stringArray.length - 1; i++) {
        //remove element if it is a vowel
        if (vowels.indexOf(stringArray[i].toLowerCase()) != -1) {
            stringArray.splice(i, 1);
            i--;
        }
    }

    //return string
    return stringArray.join('');
}
