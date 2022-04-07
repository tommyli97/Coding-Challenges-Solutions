// problem link: https://www.codewars.com/kata/54da539698b8a2ad76000228

// time complexity: O(n)

function isValidWalk(walk) {
    let cor = [0, 0];
    if (walk.length != 10) {
        return false;
    }
    for (var i = 0; i < walk.length; i++) {
        switch (walk[i]) {
            case 'n':
                cor[1] += 1;
                break;
            case 'e':
                cor[0] += 1;
                break;
            case 's':
                cor[1] -= 1;
                break;
            case 'w':
                cor[0] -= 1;
                break;
        }
    }
    if (cor[0] == 0 && cor[1] == 0) {
        return true;
    }
    return false;
}