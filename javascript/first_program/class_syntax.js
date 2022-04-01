//javascript class(es) example


//old and busted object creation
/*
var SpaceShuttle = function(targetPlanet){
    this.targetPlanet = targetPlanet;
}
*/

//new hotness
//using class / constructor
class SpaceShuttle {
    constructor(targetPlanet){
        this.targetPlanet = targetPlanet;
    }
}

var zues = new SpaceShuttle('Jupiter');

console.log(zues.targetPlanet);

//function, that makes a class object
function makeClass(){
    class Vegetable {
        constructor(name){
            this.name = name;
        }
    }
    return Vegetable;
}
const Vegetable = makeClass();
const carrot = new Vegetable('carrot');
console.log(carrot.name);