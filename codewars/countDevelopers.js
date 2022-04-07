// problem link: https://www.codewars.com/kata/582746fa14b3892727000c4f

// time complexity: O(n)

function countDevelopers(list) {
    // your awesome code here :)
    let count = 0;
    for (var i = 0; i < list.length; i++) {
        if (list[i]["continent"] == "Europe" && list[i]["language"] == "JavaScript") {
            count++;
        }
    }
    return count;
}