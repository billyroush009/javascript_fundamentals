let catName = "Quincy";
let quote;

//let catName = "Beau"; //'let' prevents duplicate declarations of variables

function catTalk(){
    "use strict"; //displays more common coding errors in whichever scope, in this case only in the 'catTalk()' function

    catName = "Oliver";
    quote = catName + " says Meow!";
    console.log(quote);
}
catTalk();

//demonstrating 'let' variables within functions / blocks
function checkScope(){
    "use strict";
    let i = "function scope";
    if (true){
        let i = "block scope";
        console.log("Block scope i is: ", i);
    }
    console.log("Function scope i is: ", i);
    return i;
}

checkScope();