// problem link: https://www.codewars.com/kata/5f70c883e10f9e0001c89673

// time complexity: O(1)

const flip = (d, a) => {
    //TODO
    if (d == 'R') {
        return a.sort((x, y) => x - y);
    }
    if (d == 'L') {
        return a.sort((x, y) => y - x);
    }
}