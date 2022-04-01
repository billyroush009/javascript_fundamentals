// destructing object(s) to utilize specific fields

//example with single object
var voxel = {x: 3.6, y: 7.4, z: 6.54};

// old and busted
var x = voxel.x;
var y = voxel.y;
var z = voxel.z;

//new hotness
//short-hand of above to set x,y,z
const { x : a, y : b, z : c} = voxel; // a = 3.6, y = 7.4, z = 6.54

const AVG_TEMPERATURES = {
    today: 77.5,
    tomorrow: 79
};

// takes object argument, assigns value from 'tomorrow' attribute from 'avgTemperatures' object to 'tempOfTomorrow' to return
function getTempOfTmrw(avgTemperatures) {
    "use strict";

    const { tomorrow : tempOfTomorrow } = avgTemperatures; //destructuring 'tomorrow' attribute from 'avgTemperatures' object argument

    return tempOfTomorrow;
}
console.log('Single Object Deconstructor:')
console.log(getTempOfTmrw(AVG_TEMPERATURES)); // 79
console.log();

//example with nested objects
const LOCAL_FORECAST = {
    today: { min: 72, max: 83},
    tomorrow: {min: 73.3, max: 84.6 }
};

function getMaxOfTmrw(forecast){
    "use strict";

    const { tomorrow : {max : maxOfTomorrow }} = forecast; //nested object attribute deconstruct

    return maxOfTomorrow;
}
console.log('Nested Object Deconstructor:')
console.log(getMaxOfTmrw(LOCAL_FORECAST));
console.log();

//example with assigning variables from arrays
console.log('Deconstructing : Assigning Variables from Arrays')
const [q, r, , s] = [1, 2, 3, 4, 5, 6];
console.log(q, r, s);

let d = 8, e = 6;
(() => {
    "use strict";
    [d, e] = [e, d] //switching places of d and e
})();
console.log(d);
console.log(e);
console.log()

//example destructuring with the rest operator
console.log('Destructuring with the Rest Operator')
const source = [1,2,3,4,5,6,7,8,9,10];
function removeFirstTwo(list){
    const [ , , ...arr] = list; //ignores first 2 elements, then assigns rest to 'arr'

    return arr;
}
const arr = removeFirstTwo(source);
console.log(arr); //3-10, first two elements of 'source' removed
console.log(source);
console.log();

//example pass an object as a function's parameters
console.log('Destructuring : Pass an Object as a Function\'s Parameters')
const stats = {
    max: 56.78,
    standard_deviation: 4.34,
    median: 34.54,
    mode: 23.87,
    min: -0.75,
    average: 35.85
};

//destructuring object in the function call 'half({ max, min})' only passes in the 'max' and 'min' field from 'stats' instead of the entire object
//useful for API calls to only work with desired fields of data instead of huge ajax/json blobs
const half = (function() {
    return function half({ max, min }){
        return (max + min) / 2.0;
    };

})();
console.log(stats);
console.log();
console.log(half(stats));