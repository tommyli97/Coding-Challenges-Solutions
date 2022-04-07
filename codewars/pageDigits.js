// problem link: https://www.codewars.com/kata/55905b7597175ffc1a00005a

// time complexity: O(log n) note: the log has a base of 10

function pageDigits(pages) {
    let counter = 1n;
    let pagesCopy = pages;
    let sum = 0n;
    // find the highest decimal place
    while (pagesCopy / 10n >= 1n) {
        pagesCopy /= 10n;
        counter++;
    }

    // add sum of pages from 1 to the highest number a place below the given pages number
    for (var i = 1n; i < counter; i++) {
        sum += ((10n ** i) - (10n ** (i - 1n))) * i;
        console.log(sum);
    }

    // add the remaining page number at the highest place
    sum += (pages - (10n ** (counter - 1n) - 1n)) * counter;
    return sum;
}