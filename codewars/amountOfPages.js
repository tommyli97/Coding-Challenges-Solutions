// problem link: https://www.codewars.com/kata/622de76d28bf330057cd6af8

// time complexity: O(1)

function amountOfPages(summary) {
    if (summary < 10) {
        return summary;
    } else if (summary <= 189) {
        return (summary - 9) / 2 + 9;
    } else if (summary <= 2889) {
        return (summary - 189) / 3 + 99;
    } else if (summary < 38889) {
        return (summary - 2889) / 4 + 999;
    } else if (summary < 488889) {
        return (summary - 38889) / 5 + 9999;
    } else {
        return 100000;
    }
}