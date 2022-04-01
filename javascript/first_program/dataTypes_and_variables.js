/* Data Types:
undefined, null, boolean, string, symbol, number, and object
*/

// var can be used through entire program
var myName = "Bill";

// let can be used only in its current scope, cannot be redeclared
let ourName = "Michigan";

// constant variable, static
const pi = 3.14;

// can print out multiple variables by separating with a ','
// "\n" is added to the 2nd line because "console.log()" automatically adds a space between arguments(?)
console.log("Sample Outputs:","\n" + myName,ourName,pi + "\n");

// * Some more variable examples
var a = 5;
var b = 10;
var c = "This is a string!";

a = a + 1;
b = b + 5;
c = c + " Appended!";

console.log("More Examples:", "\n" + a, b, c);