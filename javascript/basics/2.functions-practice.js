/**
 * This file is to get the details on the functions
 * Run this file with the following command
 * `cd javascript/basics`
 * `node 2.functions.js`
 */

// //Here "value1" and "value2" are called "arguments".
// //Here "getMinimum" is called the "function name".
// //Code below is called function definition
 function getMinimum(value1, value2){
     console.log('Function arguments. value1 ==>', value1, "value2 ==>", value2);
     let minimumValueFromFunction;
     if(value1 < value2){
         minimumValueFromFunction = value1;
     } else {
         minimumValueFromFunction = value2;
     }
     console.log('From Function :: Minimum value is', minimumValueFromFunction);
     //Return value
     return minimumValueFromFunction;
 }

// //The code below is called the "function call"
// //The return value of the function is assigned to "minimumValue" variable
 const returnValueFromFunction = getMinimum(10, 12);
 console.log('Here is the return value from the function ==> ', returnValueFromFunction);

//TODO set the function to sum the two value
//TODO set the function to do the square of the value
//
 function getSquareValue(value){
     let functionReturnValue = value * value;
     console.log('function return value is ==>', functionReturnValue);
     return functionReturnValue;
 }

 let returnValue = getSquareValue(10);
 console.log('Return value is ==>', returnValue);


// //TODO set the function to sum the two values
// //TODO set the function to find the area of circle
//
// function getSumValue(value1,value2) {
//     var functionReturnValue = (value1+value2);
//     console.log(functionReturnValue);
//     return functionReturnValue;
// }
// let returnValueOfSquare = getSumValue(100,150);
// console.log(returnValueOfSquare);
//
// function getDivision(value1, value2) {
//     var functionreturnValue = (value1 / value2);
//     console.log(functionreturnValue);
//     return functionreturnValue;
// }
//
// let returnValueofDivision = getDivision(50, 10);
// console.log(returnValueofDivision);
//
// function getPercentage(value1, value2) {
//     var functionreturnValue = (value1 % value2);
//     console.log(functionreturnValue);
//     return functionreturnValue;
// }
//
// let returnValueOfPercentage = getPercentage(2500, 5);
// console.log(returnValueOfPercentage);
//
 function getSubtract(value1, value2) {
     let functionOfReturnValue = (value2 - value1);
     console.log(functionOfReturnValue);
     return functionOfReturnValue;
}
 let returnValueOfsubtract = getSubtract(10,20);
 console.log(returnValueOfsubtract);

 function getCircleArea(radius) {
     let area = 3.14*radius*radius;
     console.log(area);
     return area;
 }

let returnValueofArea = getCircleArea(10);
console.log(returnValueofArea);
