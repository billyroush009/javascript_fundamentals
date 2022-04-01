// condition ? statement-if-true: statement-if-false

function checkEqual(a,b){
 return a === b ? true : false; //if a === b, return true, else return false, same as 'return a === b' in this case, just an example
}

console.log(checkEqual(1,2));

// checking if argument is positive, negative, or zero
function checkSign(num){
    return num > 0 ? "positive!" : num < 0 ? "negative!" : "zero" // multiple conditions in one ternary operator
}

console.log(checkSign(1));
console.log(checkSign(-1));
console.log(checkSign(0));