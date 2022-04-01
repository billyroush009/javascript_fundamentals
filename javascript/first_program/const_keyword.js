function printManyTimes(str){
    "use strict";

    //var sentence = str + " is cool!"; //allows reassignment
    const sentence = str + " is cool!"; //const is not allowed to be reassigned, read-only

    //fsentence = str + " is amazing!"; // works with 'var', not with 'const'

    for(let i = 0; i < str.length; i+=2){
        console.log(sentence);
    }
}

printManyTimes("freeCodeCamp");
console.log();

//mutate an array with const

const s = [5, 7, 2];
function editInPlace(){
    "use strict";

    //s = [2, 5, 7]; //will not work with 'const'
    s[0] = 2; //able to 'mutate' array by addressing specific index
    s[1] = 5;
    s[2] = 7;

}
console.log(s);

editInPlace();

console.log(s);

//prevent object mutation
function freezeObj(){
    "use strict";
    const MATH_CONSTANTS = {
        PI: 3.14
    };

    Object.freeze(MATH_CONSTANTS); //freezes the constants, CANNOT be overwritten

    try {
        MATH_CONSTANTS.PI = 99;
    } catch(ex){
        console.log(ex);//intentional error to show we cannot set PI to 99 if the object is frozen
    }
    return MATH_CONSTANTS.PI;
}

const PI = freezeObj();

console.log(PI);