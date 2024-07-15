const sumAll = function(num1, num2) {
    let lowerBounds,
        upperBounds;

    if (num1 < num2) {
        lowerBounds = num1;
        upperBounds = num2;
    } else if (num1 > num2) {
        lowerBounds = num2;
        upperBounds = num1;
    } else {
        return num1 + num2;
    }

    let differenceBetween =  upperBounds - lowerBounds;

    let finalSum = 0;
    for (i = lowerBounds; i <= upperBounds; i++) {
        finalSum += i;
    }

    return finalSum;

};

// Do not edit below this line
module.exports = sumAll;
