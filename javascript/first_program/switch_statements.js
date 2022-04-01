/*
Basic example demonstrating 'switch' statements in JavaScript
*/

function caseInSwitch(val) {
    var answer = "";

    switch(val){
        case 1:
            answer = "Alpha";
            break;
        case 2:
            answer = "Beta";
            break;
        case 3:
            answer = "Gamma";
            break;
        case 4:
            answer = "Delta";
            break;
        default:
            answer = "default";
            break;
    }

    return answer;
}

console.log(caseInSwitch(1));
console.log(caseInSwitch(2));
console.log(caseInSwitch(3));
console.log(caseInSwitch(4));
//default case
console.log(caseInSwitch("abc") + "\n");

/*
Example uses empty "cases" to show how switch statement checks are made (1:3="Low"; 4:6="Mid", 7:9="High", <1 or >10 not defined)
*/
function sequentialSizes(val){
    var answer = "";
    switch(val){
        case 1:
        case 2:
        case 3:
            answer = "Low";
            break;
        case 4:
        case 5:
        case 6:
            answer = "Mid";
            break;
        case 7:
        case 8:
        case 9:
            answer = "High";
            break;
    }
    return answer;
}

console.log(sequentialSizes(1));
console.log(sequentialSizes(4));
console.log(sequentialSizes(7));
console.log(sequentialSizes(10)); // no output, outside defined range of cases

/*
Switch example with different data types as input argument
*/
function switch_dif_types(val){
    switch(val){
        case "bob":
            answer = "Marley";
            break;
        case 42:
            answer = "The Answer";
            break;
        case 1:
            answer = "There is no #1";
            break;
        case 99:
            answer = "Missed by this much!";
            break;
        case 7:
            answer = "Ate Nine";
            break;
        default:
            answer = "OTHER"
            break;
    }
    return answer;
}

console.log(switch_dif_types("bob"));
console.log(switch_dif_types(42));
console.log(switch_dif_types(1));
console.log(switch_dif_types(99));
console.log(switch_dif_types(7));
console.log(switch_dif_types("AEIOU!")); // default case