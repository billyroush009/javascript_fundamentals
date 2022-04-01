//object creation
var collection = {
    "2548": {
        "album": "Slippery When Wet",
        "artist": "Bon Jovi",
        "tracks": [
            "Let It Rock",
            "You Give Love a Bad Name"
        ]
    },
    "2468": {
        "album": "1999",
        "artist": "Prince",
        "tracks": [
            "1999",
            "Little Red Corvette"
        ]
    },
    "1245": {
        "artist": "Robert Palmer",
        "tracks": []
    },
    "5439": {
        "album": "ABBA Gold"
    }
};

var collectionCopy = JSON.parse(JSON.stringify(collection)); //creates copy of object
//console.log(collectionCopy);

function updateRecords(id, prop, value){
    if(value === ""){
        //delete collection on blank argument
        delete collection[id][prop]; //delete a certain property
    } else if (prop === "tracks"){
        //add tracks to array
        collection[id][prop] = collection[id][prop] || []; //creates track array as attribute if doesn't exist OR copies if existing
        collection[id][prop].push(value); //add track to array
    } else if (prop === "artist"){
        collection[id][prop] = value;
    }
    return collection;
}
//testing 'updateRecords' and displaying results
console.log(collection["5439"]);
console.log();

updateRecords(5439, "artist", "ABBA"); //adding 'artist' field to 5439 object then setting value to 'ABBA'

console.log(collection["5439"]);
console.log();

updateRecords(1245, "tracks", "test");
console.log(collection["1245"]);