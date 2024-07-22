const removeFromArray = function(arrayToAlter) {
    let returnArray = [];
    
    outer: for(const item of arrayToAlter){
        for(let i = arguments.length - 1; i < arguments.length; i++){
            if(arguments[i] == item){
                continue outer;
            }
        }
        returnArray.push(item);
    }
};

// Do not edit below this line
module.exports = removeFromArray;
