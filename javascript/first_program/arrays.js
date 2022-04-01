// arrays have no datatypes in JS, praise be

var ourArray = ["John", 23];

var myArray = []; // empty array

myArray = ["Quincy", 1];
// 'push' used to add items to the end of an array
myArray.push("Billus", 2);

console.log(myArray);
console.log(ourArray);

// array where every element is an array, array of arrays
var myNestedArray = [["bulls", 23], ["white sox", 45]];
console.log(myNestedArray);

// indexing array using JS
var indexArray = [50,60,70];
var ourData = indexArray[0];
console.log(ourData);

// changing index of array
indexArray[1] = 65;
console.log(indexArray);

// accessing nested array info
// accessing the 2nd element of the first entry in 'myNestedArray'
console.log(myNestedArray[0][1]);

// demonstrating 'pop' command
// removes LAST element from array
var removedFromOurArray = indexArray.pop();
console.log(removedFromOurArray);
console.log(indexArray);
// demonstrating 'shift" command
// removes FIRST element from array
removedFromOurArray = indexArray.shift();
console.log(removedFromOurArray);
console.log(indexArray);
// demo 'unshift'
// adds FIRST element to array, adding back from shift example above
indexArray.unshift(removedFromOurArray);
console.log(removedFromOurArray);
console.log(indexArray);

var myList = [["cereal", 3], ["milk", 2], ["bananas", 3], ["juice", 2], ["eggs", 12]];

console.log(myList);