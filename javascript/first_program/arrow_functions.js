//anonymouse function, similar to 'lambda'?
const magic = () => new Date(); //full anonymous function, returns date
console.log(magic()); //how to call function above

//old busted
/*
const myConcat = function(arr1, arr2) {
    return arr1.concat(arr2);
};
*/
//new hotness
const myConcat = (arr1, arr2) => arr1.concat(arr2);

console.log(myConcat([1,2], [3,4,5]));

const realNumberArray = [4, 5.6, -9.8, 3.14, 42, 6, 8.34, -2];

const squareList = (arr) => {
    const squaredIntegers = arr.filter(num => Number.isInteger(num) && num > 0).map(x => x * x); //anonymous functions with one argument do not need (), map takes in each element from array and squares
    return squaredIntegers; //returns positive integers squared
}

const squaredIntegers = squareList(realNumberArray);
console.log(squaredIntegers);

//default parameters
const increment = (function() {
    //if no value is passed in, it will be set to 1, otherwise it is set to the argument's value
    return function increment(number, value = 1) {
        return number + value;
    };
})();

console.log(increment(5,2)); // 5 increment 2 = 7
console.log(increment(5)); // 5 increment 1 (default) = 6