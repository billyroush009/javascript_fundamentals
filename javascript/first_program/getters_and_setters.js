//shows class get/set to read/write attributes without directly references the variable(s)

class Book {
    constructor(author){
        this._author = author;
    }

    get writer(){
        return this._author;
    }

    set writer(updateAuthor){
        this._author = updatedAuthor;
    }
}

//temp passed in as farh, converted to cels
function makeClass(){
    class Thermostat {
        constructor(temp){
            this._temp = 5/9 * (temp - 32);
        }
        get temperature(){
            return this._temp;
        }
        set temperature(updatedTemp){
            this._temp = updatedTemp;
        }
    }
    return Thermostat;
}

const Thermostat = makeClass();
const thermos = new Thermostat(76);
let temp = thermos.temperature;
console.log(thermos);
thermos.temperature = 26;
temp = thermos.temperature;
console.log(temp);