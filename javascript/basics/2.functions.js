/**
 * This file is to get the details on the functions
 * Run this file with the following command
 * `cd javascript/basics`
 * `node 2.functions.js`
 */

//Here "value1" and "value2" are called "arguments".
//Here "getMaximum" is called the "function name".
//Code below is called function definition
function getMaximum(value1, value2){
    console.log('Function arguments. value1 ==>', value1, "value2 ==>", value2);
    var maximumValueFromFunction;
    if(value1>value2){
        maximumValueFromFunction = value1;
    } else {
        maximumValueFromFunction = value2;
    }
    console.log('From Function :: Maximum value is', maximumValueFromFunction);
    //Return value
    return maximumValueFromFunction;
}

//The code below is called the "function call"
//The return value of the function is assigned to "maximumValue" variable
const returnValueFromFunction = getMaximum(10, 12);
console.log('Here is the return value from the function ==> ', returnValueFromFunction);

