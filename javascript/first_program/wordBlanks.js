/* First function
    Adlib style function, pass in various words to get custom results
*/


function wordBlanks(myNoun, myAdjective, myVerb, myAdverb){
    var result = "";

    result += "The " + myAdjective + " " + myNoun + " " + myVerb + " " + myAdverb + " to the store.";

    return result;

}

console.log(wordBlanks("dog", "big", "ran", "quickly"));

console.log(wordBlanks("ass", "sore", "pound", "visciously"));