//function converts datatype str to int
function convertToInteger(str){
    return parseInt(str);
}

console.log("56" + 1); // string, gets concatenated
console.log(convertToInteger("56")); //returns string as int
console.log(convertToInteger("56") + 1); //returns string as int + 1, addition instead of concatenation

//base 2, binary converter
function convToIntRadix(str){
    return parseInt(str,2);
}

console.log()
console.log(convToIntRadix("10011")); //19 in binary

