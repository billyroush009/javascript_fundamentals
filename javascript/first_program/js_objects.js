// Example

//object declaration / definition
var ourDog = {
    "name": "Camper",
    "legs": 4,
    "tails": 1,
    "friends": ["everything!"]
};

var ourDog = {
    "name": "Quincy",
    "legs": 3,
    "tails": 2,
    "friends": []
};

console.log(ourDog.name); // example how to print one object property

var testObj = {
    "hat": "ballcap",
    "shirt": "jersey",
    "shoes": "cleats"
};

var hatValue = testObj.hat; //assigning value to variable
console.log(hatValue);

var testObj = {
    "an entree": "hamburger",
    "my side": "veggies",
    "the drink": "water"
};

var entreeValue = testObj["an entree"]; //referencing property with bracket notation
console.log(entreeValue);
console.log();

var testObj = {
    12: "Namath",
    16: "Montana",
    19: "Unitas"
}

var playerNumber = 16;
var player = testObj[playerNumber];
console.log(player);
console.log();

var myDog = {
    "name": "Coder",
    "legs": 4,
    "tails": 1,
    "friends": ["freeCodeCamp Campers"]
};

myDog.name = "Happy Coder"; // changing property directly with '=' assignment
console.log(myDog.name);

myDog['bark'] = "woof"; // creating object property after initialization
console.log(myDog.bark);

delete myDog.bark; // how to delete object property after initialization
console.log(myDog.bark);
console.log();

//object for lookups example
var lookup = {
    "alpha": "Adams",
    "bravo": "Boston",
    "charlie": "Chicago",
    "delta": "Denver",
    "echo": "Easy",
    "foxtrot": "Frank"
};

console.log(lookup["alpha"]);
console.log(lookup["foxtrot"]);
console.log();

//testing objects FOR properties
var myObj = {
    gift: "pony",
    pet: "kitten",
    bed: "sleigh"
};

function checkObj(checkProp){
    if(myObj.hasOwnProperty(checkProp)) {
        return myObj[checkProp];
    } else {
        return "Not Found";
    }
}

console.log(checkObj("gift"));
console.log(checkObj("bed"));
console.log(checkObj("random thing"));
console.log();

// manipulating complex objects
// array of objects
var myMusic = [
    {
        "artist": "Billy Joel",
        "title": "Piano Man",
        "release_year": 1973,
        "formats": [
            "CD",
            "8T",
            "LP"
        ],
        "gold": true
    }, // end object 1
    {
        "artist": "Beau Carnes",
        "title": "Cereal Man",
        "release_year": 2003,
        "formats": [
            "YouTube Video"
        ]
    }
];

console.log(myMusic);