var operations=require("../operators/operations.js");
var exports = module.exports = {};

exports.performOperation = (operation,arguments) => {
    if (isValid(arguments)){
        if(operation in operations){
            var result = operations[operation](arguments);
            console.log(result);
        }
        else
            console.error("ERROR: We currently do not support the operation " + operation);
    }
    else{
            console.error("ERROR: Invalid Arguments.Please use comma separated numbers in this simple calculator");
    }    
}


const isValid = (arguments) => {
    var isValid=true;
    arguments.forEach(element => {
        if (Number.isNaN(element) && !Number.isFinite(element)){
            isValid = false;
        }
    });
    return isValid;
}