const removeFromArray = function(arr, num, num2 = null) {
    let newArray = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== num && arr[i] !== num2) {
            newArray.push(arr[i]);
        }
    }
    return newArray;
};

// Do not edit below this line
module.exports = removeFromArray;
