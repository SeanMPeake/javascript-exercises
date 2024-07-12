const reverseString = function(str) {
    // let revStr = [...str];
    // revStr = revStr.reverse();
    // revStr = revStr.join('');
    // return revStr;
    return [...str].reverse().join('');

    // let reverseStr = str.split('');
    // reverseStr = reverseStr.reverse();
    // reverseStr = reverseStr.join('');
    // return reverseStr;
    // return str.split('').reverse().join('');
    
    // let revStr = str.split('');
    // revStr = revStr.reduce((acc, char) => char + acc, '');
    // return revStr;
    // return str.split('').reduce((acc, char) => char + acc, '');
};

// Do not edit below this line
module.exports = reverseString;
