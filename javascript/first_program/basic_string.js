var firstName = "Alan";
var lastName = "Turing";

// '\' used as escape character in JavaScript, can surround string in ' or ` as well
var myStr = "I am a \"double quoted\" string inside \"double quotes\"";
console.log(myStr);

var single_quotes = 'Now "Quotes" can be added without escape characters!';
console.log(single_quotes);

var backticks = `"Can also use \`\ to surround your strings!"`;
console.log(backticks);

var escapeSequences = "FirstLine\n\t\\SecondLine\nThirdLine";
console.log(escapeSequences);

// concatenate
//var outStr = "I come first. " + "I come second.";
var outStr = "I come first. ";
outStr+="I come second.";
console.log(outStr);
// string LENGTH field present in JS
console.log("Length of: ", "\"" + outStr + "\" = ", outStr.length);
// references characters in string through typical array usage
console.log("First letter of: ", "\"" + outStr + "\" = ", outStr[0]);
console.log("Last letter of: ", "\"" + outStr + "\" = ", outStr[(outStr.length-1)]);