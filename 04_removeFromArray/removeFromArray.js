const removeFromArray = function() {
    let returnArray = [];
    
    outer: for(let item of arguments[0]){
        for(let i = 1; i < arguments.length; i++){
            if(arguments[i] === item){
                continue outer;
            }
        }
        returnArray.push(item);
    }
    return returnArray;
};

// Do not edit below this line
module.exports = removeFromArray;
