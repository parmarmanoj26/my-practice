// for loops.....
 let number = 10;
for(i = 1; i<=10; i++)
{
    const result = i * number
    console.log(`${number} * ${i} = ${result}`);
}
// print the value of the arrays
//const fruits = ['mano', 'banana', 'orange']
// print the values of this array in the loop
//for( let i=0; i<cars.length; i++)
//{
//    console.log(cars[i]);
}
 let count = 10;
while (count < 10) {
    console.log(count);
    count *= 10;
}

/*const fruits = ['mano', 'banana', 'orange'];
let i = 0;
let text;

while (fruits[i]) {
    text = fruits[i];
    i++;
    console.log(text);
}
*/
 /*
 let result ;
  /*
let i = 1;

do {
    result = i*10;
    i++;
    console.log(result);
    result*=10;

} while (i < 10);
console.log(result);

*/

/*
If percentage between 80 to 100
Log ==> Great
If percentage between 60 to 79
Log ==> 	Good
If percentage between 50 to 59
Log ==> 	Well
If percentage between 0 to 49
Log ==> 	Can do Better
*/

//let marks = 500;
//marks = 455/5;
//console.log(marks);

const percentage = 100;
if (percentage=>80 || percentage<=100)
{
    console.log("Great");
}
else if (percentage >=79 )
{
    console.log("Good");
}
else if (percentage>=59)
{
    console.log("Well");
}
else if (percentage>=49)
{
    console.log("can do better");
}


