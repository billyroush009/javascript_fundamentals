// using '==' to compare values, two '=' will convert datatypes if it can be easily done
function testEqual(val){
    if(val == 12){
        return "Equal";
    }
    return "Not Equal";
}

console.log(testEqual(10));
console.log(testEqual(12));
console.log(testEqual("12") + "\n"); // matches even though arg is 'string' and check is against 'int'

// using '===' checks if the DATATYPES match as well, no implicit datatype conversion
function testStrict(val){
    if(val === 12){
        return "Equal";
    }
    return "Not Equal";
}

console.log(testStrict(10));
console.log(testStrict(12));
console.log(testStrict("12") + "\n"); // does NOT match because 'string' is different than type 'int', checked with "==="

// more direct example of exact comparison
function compareEquality(a,b){
    if (a === b){
        return "Equal";
    }
    return "Not Equal";
}
console.log(compareEquality(10,10));
console.log(compareEquality(10,"10") + "\n");

// same examples with INEQUALITY
function testNotEqual(val){
    if (val != 99) {
        return "Not Equal";
    }
    return "Equal";
}

console.log(testNotEqual(10));
// strict inequality also doable with "!=="
function testStrictNotEqual(val){
    if (val !== 99) {
        return "Not Equal";
    }
    return "Equal";
}

console.log(testStrictNotEqual(99));
console.log(testStrictNotEqual("99"));