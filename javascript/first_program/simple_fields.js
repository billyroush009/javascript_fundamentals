//creating object with simple fields

const createPerson_OLD = (name, age, gender) => {
    //old and busted
    return {
        name: name,
        age: age,
        gender: gender
    };
    

};

//new hotness
//if key is the name of the argument, you can short-hand to directly to return key:value pairs
const createPerson = (name, age, gender) => ({ name, age, gender });

//console.log(createPerson_OLD("Zodiac Hasbro", 56, "male")); //same result, more code
console.log(createPerson("Zodiac Hasbro", 56, "male"));

