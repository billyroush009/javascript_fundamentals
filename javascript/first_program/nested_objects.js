//object of objects
var myStorage = {
    "car": {
        "inside": {
            "glove box": "maps",
            "passenger seat": "crumbs",
        },
        "outside": {
            "trunk": "jack"
        }
    }
};
//variable to display attribute value of nested object
var gloveBoxContents = myStorage.car.inside["glove box"];
console.log(gloveBoxContents);