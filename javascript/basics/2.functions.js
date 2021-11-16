/**
 * This file is to get the details on the functions
 * Run this file with the following command
 * `cd javascript/basics`
 * `node 2.functions.js`
 */

//Here "value1" and "value2" are called "arguments".
//Here "getMaximum" is called the "function name".
//Code below is called function definition
function getMaximum(value1, value2, value3){
    console.log('Function arguments. value1 ==>', value1, "value2 ==>", value2 , "value3 ==>", value3);
    if(value1 > value2 && value1 > value3){
        console.log(value1);
    } else if(value2 > value1 && value2 > value3){
        console.log(value2);
    } else {
        console.log(value3);
    }
}

//The code below is called the "function call"
//The return value of the function is assigned to "maximumValue" variable
const returnValueFromFunction = getMaximum(10, 12 ,15);


let m,n;
for ( m=1; m<=5; m++)
{
    for(n=0; n<=m; n++) ;
    {
       console.log("*");
    }

}



