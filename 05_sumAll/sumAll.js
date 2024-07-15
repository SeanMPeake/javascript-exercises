const sumAll = function(num1, num2) {
    if (num1 < 0 || num2 < 0 ||
        typeof num1 !== 'number' || 
        typeof num2 !== 'number') {
        return 'ERROR';
    }

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

    let finalSum = 0;
    for (i = lowerBounds; i <= upperBounds; i++) {
        finalSum += i;
    }

    return finalSum;

};

// Do not edit below this line
module.exports = sumAll;
