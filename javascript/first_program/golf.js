/*
Program demonstrating a function used to decide which member of an array (score) is attained using golf scoring.
Essentially a 'switch' statement using 'if/else if' statements
*/

// array that holds all the names for golf hole scores
var names = ["Hole-in-one!", "Albatross", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go Home D:"];

function golfScore(par, strokes){

    if(strokes == 1) {
        return names[0]; // hole in one!
    } else if (strokes <= (par - 3)){
        return names[1];
    } else if (strokes <= (par - 2)){
        return names[2];
    } else if (strokes == (par - 1)){
        return names[3];
    } else if (strokes == par){
        return names[4];
    } else if (strokes == (par + 1)){
        return names[5];
    } else if (strokes == (par + 2)){
        return names[6];
    } else if (strokes >= (par + 3)){
        return names[7];
    }
    
    //return "Change Me";
}

// function, arguments are 'par' then 'strokes'
console.log(golfScore(10,15));