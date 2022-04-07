// problem link: https://www.codewars.com/kata/550498447451fbbd7600041c

// time complexity: O(1)

const comp = (a1, a2) => {
    if (!a1 || !a2 || a1.length !== a2.length) return false;
    return a1.map(x => x * x).sort().toString() === a2.sort().toString();
}