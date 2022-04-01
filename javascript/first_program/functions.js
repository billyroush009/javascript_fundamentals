/*
Functions:
Demonstrating basic function/method creation and usage
Doesn't appear to be above/below the 'main' scope
*/

function ourReusableFunction(){
    console.log("Hey World!");
    reusableFunction();
}

// invoking the function(s)
ourReusableFunction();

function reusableFunction(){
    console.log("Goodbye World!");
}

//

function ourFunctionWithArgs(a,b){
    console.log(a-b);
}

ourFunctionWithArgs(10,5);

function functionWithArgs(a,b){
    console.log(a+b);
}

functionWithArgs(10,5);

// global scope example

//global variable bc outside of function, accessible anywehere
var myGlobal = 10;

function fun1(){
    // oopsGlobal is localized only to 'fun1' scope
    //oopsGlobal = 5; // bc this is not defined with the 'var' keyword, it is DEFAULTED to global
    var oopsGlobal = 5;
}

function fun2(){
    var output = "";
    if (typeof myGlobal != "undefined"){
        output += "myGlobal: " + myGlobal;
    }
    if (typeof oopsGlobal != "undefined"){
        output += " oopsGlobal: " + oopsGlobal;
    }
    console.log(output);
}
//calling functions
fun1();
fun2();

// local scope example
// * if there is duplicate var names between global and local, LOCAL WILL TAKE PRECEDENT
function myLocalScope(){
    var myLocalVar = 5;
    console.log(myLocalVar);
}
myLocalScope();

//console.log(myLocalVar); // CANNOT RUN THIS because 'myLocalVar' is OUT OF SCOPE
var outerWear = "T-Shirt";

function myOutfit(){
    var outerWear = "Sweater"; // this OVERRIDES 'outerWear' above, comment out and 'outerWear' will be "T-Shirt"
    return outerWear;
}

// outputting, also able to use 'outerWear' directly to avoid local scope
console.log(myOutfit());
console.log(outerWear);