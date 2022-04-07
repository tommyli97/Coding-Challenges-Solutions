// problem link: https://www.codewars.com/kata/514a024011ea4fb54200004b

// time complexity: O(1)

function domainName(url) {
    const p = /^(?:https?:\/\/)?(?:[^@\/\n]+@)?(?:www\.)?/igm;
    var period = url.replace(p, '').indexOf('.');
    return url.replace(p, '').substr(0, period);
}