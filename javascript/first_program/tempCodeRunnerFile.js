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
console.log(testGreaterThan(101));

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
console.log(testGreaterOrEqual(101));