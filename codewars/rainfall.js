// problem link: https://www.codewars.com/kata/56a32dd6e4f4748cc3000006

// time complexity: both 'mean' and 'variance' functions are O(n)

function mean(town, string) {
    let arr = getTown(town, string);
    if (arr == false) {
        return -1;
    }
    let sum = 0;
    for (var i = 0; i < arr.length; i++) {
        sum += parseFloat(arr[i]);
    }
    return sum / arr.length;
}
function variance(town, string) {
    let arr = getTown(town, string);
    if (arr == false) {
        return -1;
    }
    let sum = 0;
    let meanRain = mean(town, string);
    for (var i = 0; i < arr.length; i++) {
        sum += (meanRain - parseFloat(arr[i])) ** 2;
    }
    return sum / arr.length;
}

//getTown is a function that takes the town name and returns an object with that town's months as keys and rainfall as values
function getTown(town, string) {
    let arr = string.split("\n");
    let temperature = [];
    for (let i = 0; i < arr.length; i++) {
        let colIndex = arr[i].indexOf(':');
        if (arr[i].substr(0, colIndex) == town) {
            let str = arr[i].substr(colIndex + 1, arr[i].length);
            let newArr = str.split(',');
            for (var j = 0; j < newArr.length; j++) {
                temperature.push(newArr[j].substr(newArr[j].indexOf(' ') + 1, newArr[j].length));
            }
            return temperature;
        }
    }
    return false;
}