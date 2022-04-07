// problem link: https://www.codewars.com/kata/60a94f1443f8730025d1744b

// time complexity: O(n^2)

function grid(N) {
    const abc = "abcdefghijklmnopqrstuvwxyz";
    let result = [];
    let indexB = 1;
    let indexI = 0;

    if (N < 0 || typeof N !== "number") {
        return null;
    }
    for (let i = 0; i < N; i++) {
        result.push(abc[indexI]);
        indexI += 1;

        for (let b = 1; b < N; b++) {
            if (abc[indexB - 1] === "z") {
                indexB = 0;
            }
            result.push(` ${abc[indexB]}`);
            indexB = indexB + 1;
        }
        if (abc[indexI - 1] === "z") {
            indexI = 0;
        }

        indexB = indexI + 1;
        result.push("\n");
    }
    result.pop();

    return result.join("");
}
