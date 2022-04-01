// simple function to manipulate arrays

// appends 'item' to end of array, returns array without it's first CURRENT element
function nextInLine(arr, item) {
    arr.push(item);
    return arr.shift();
}

var testArr = [1,2,3,4,5];

console.log("Before: " + JSON.stringify(testArr));
console.log(nextInLine(testArr,6));
console.log("After: " + JSON.stringify(testArr));
console.log(nextInLine(testArr,7));
console.log("After: " + JSON.stringify(testArr));