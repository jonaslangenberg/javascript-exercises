const sumAll = function(startNumber, endNumber) {
    if (startNumber > endNumber){
        let placeholder = startNumber;
        startNumber = endNumber;
        endNumber = placeholder;
    }

    if(Number.isInteger(startNumber) == false || Number.isInteger(endNumber) == false){
        return "ERROR";
    }

    if(startNumber < 0 || endNumber < 0){
        return "ERROR";
    }
    let sum = 0;
    for(let i = startNumber; i <= endNumber; i++){
        sum += i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
