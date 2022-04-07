// problem link: https://www.codewars.com/kata/5672a98bdbdd995fad00000f

// time complexity: O(1)

const rps = (p1, p2) => {
    let r = 'rock';
    let p = 'paper';
    let s = 'scissors'
    if (p1 == r) {
        switch (p2) {
            case r:
                return 'Draw!';
            case p:
                return 'Player 2 won!';
            case s:
                return 'Player 1 won!';
        }
    } else if (p1 == p) {
        switch (p2) {
            case p:
                return 'Draw!';
            case s:
                return 'Player 2 won!';
            case r:
                return 'Player 1 won!';
        }
    } else if (p1 == s) {
        switch (p2) {
            case s:
                return 'Draw!';
            case r:
                return 'Player 2 won!';
            case p:
                return 'Player 1 won!';
        }
    }
};