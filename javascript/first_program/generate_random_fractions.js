//random nums
//random frac
function randomFraction(){

    return Math.random(); //random frac between 0-1
}

console.log(randomFraction());

//random wholeNum
function randomWholeNumber(){

    return Math.floor(Math.random() * 20); //random numbet between 0-19, rounded down
}

console.log(randomWholeNumber());

//random range
function ourRandomRange(ourMin, ourMax){
    return Math.floor(Math.random() * (ourMax - ourMin + 1) + ourMin);
}

ourRandomRange(1,9);

function randomRange(myMin, myMax){
    return Math.floor(Math.random() * (myMax - myMin + 1)) + myMin;
}

var myRandom = randomRange(5,15);

console.log(myRandom);