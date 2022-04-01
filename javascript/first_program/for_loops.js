var ourArray = [];

//for loop example, params assigned in arguments

//fill in array 0:4
for (var i = 0; i < 5; i++){
    ourArray.push(i);
}

console.log(ourArray);

var myArray = [];
//fill in array 1:5
for(var i = 1; i < 6; i++){
    myArray.push(i);
}

console.log(myArray);


//for loop with different increments
var evenArray = [];

for (var i = 0; i < 10; i += 2){
    evenArray.push(i);
}

console.log(evenArray);

var oddArray = [];

for (var i = 1; i < 10; i += 2){
    oddArray.push(i);
}

console.log(oddArray);

//count backwards for loop

backwardsArray = []

for (var i = 10; i > 0; i -= 2){
    backwardsArray.push(i);
}

console.log(backwardsArray);

//iterate through array with for loop
var ourArry = [9,10,11,12];
var ourTotal = 0;

for (var i = 0; i < ourArry.length; i++){
    ourTotal += ourArry[i]; //sum of all elements in array
}

console.log(ourTotal);

var myArry = [2,3,4,5,6];
var total = 0;

for (var i = 0; i < myArry.length; i++){
    total += myArry[i];
}

console.log(total);

//nesting for loops
function multiplyAll(arr){
    var product = 1;

    for (var i = 0; i < arr.length; i++){
        for (var j = 0; j < arr[i].length; j++){
            product *= arr[i][j]; // 2d coords for each element in nested array
        }
    }

    return product;
}

var product = multiplyAll([[1,2],[3,4],[5,6,7]]);

console.log(product);