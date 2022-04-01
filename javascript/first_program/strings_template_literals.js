//template literals, special type of strings making complex strings easier

const person = {
    name: "Zodiac Hasbro",
    age: 56
};

// uses ` characters to create specially formatted string, allows "" without escaping as well as variables inside ${} formats
const greeting = `Hello, my name is ${person.name}!
I am ${person.age} years old`;

console.log(greeting);
console.log();

const result = {
    success: ["max-length", "no-amd", "prefer-arrow-functions"],
    failure: ["no-var", "var-on-top", "linebreak"],
    skipped: ["id-blacklist", "no-dup-keys"]
};

//template literal function
//returns list of HTML style lines in a list, composed of values from whichever list is passed in, result.failure[] in this case
function makeList(arr){
    const resultDisplayArray = [];
    for(let i = 0; i < arr.length; i++){
        resultDisplayArray.push(`<li class ="text-warning"> ${arr[i]} </li>`);
    }
    return resultDisplayArray;
}

const resultDisplayArray = makeList(result.failure);
console.log(resultDisplayArray);