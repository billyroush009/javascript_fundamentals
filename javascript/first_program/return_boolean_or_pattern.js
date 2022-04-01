/*
Returning a boolean comparing two numbers

Returning early if input arg is negative, otherwise exponent func
*/


function isLess(a,b) {
    return (a < b) //implicitly assigned true/false
}

console.log(isLess(10,15));

function abTest(a,b){

    if(a < 0 || b < 0){
        return undefined; // early return example if input arg is negative number
    }

    return Math.round(Math.pow(Math.sqrt(a) + Math.sqrt(b), 2));
}
console.log(abTest(2,2));
console.log(abTest(0,0));
console.log(abTest(-1,2));
console.log(abTest(1,-2));