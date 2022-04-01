/* Demonstrating the basic logical comparators in JavaScript
*/

function testGreaterThan(val){
    if (val > 100){
        return "Over 100";
    }

    if (val > 10) 
    {
        return "Over 10";
    }

    return "10 or under";
}
console.log(testGreaterThan(1));
console.log(testGreaterThan(10));
console.log(testGreaterThan(11));
console.log(testGreaterThan(100));
console.log(testGreaterThan(101) + "\n");

function testGreaterOrEqual(val){
    if (val >= 100){
        return "Over 100";
    }

    if (val >= 10) 
    {
        return "Over 10";
    }

    return "10 or under";
}

console.log(testGreaterOrEqual(1));
console.log(testGreaterOrEqual(10));
console.log(testGreaterOrEqual(11));
console.log(testGreaterOrEqual(100));
console.log(testGreaterOrEqual(101) + "\n");

function testLogicalAnd(val){
    if (val <= 50 && val >= 25){
        return "Between 25 and 50";
    }

    return "Outside 25:50";
}
console.log(testLogicalAnd(24));
console.log(testLogicalAnd(25));
console.log(testLogicalAnd(50));
console.log(testLogicalAnd(51) + "\n");

function testLogicalOr(val){
    if (val < 10 || val > 20){
        return "Less than 10 OR greater than 20";
    }

    return "Between 10 and 20";
}

console.log(testLogicalOr(9));
console.log(testLogicalOr(10));
console.log(testLogicalOr(20));
console.log(testLogicalOr(21) + "\n");

function testElse(val){
    var result = "";
    if (val > 5) {
        result = "Bigger than 5";
    } else if (val == 5) {
        result = "5 exactly";
    } else {
        result = "Smaller than 5"
    }
    return result;
}

console.log(testElse(6));
console.log(testElse(5));
console.log(testElse(4) + "\n");

// Like a "switch" statement using if/elseif/else
function testSize(val){
    if (val < 5){return "Tiny";}
    else if (val < 10) {return "Small";}
    else if (val < 15) {return "Medium";}
    else if (val < 20) {return "Large";}
    else {return "Huge";}
}

console.log(testSize(4));
console.log(testSize(5));
console.log(testSize(10));
console.log(testSize(19));
console.log(testSize(20));