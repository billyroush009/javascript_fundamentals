/*
function with switch case to count cards in blackjack, increments or decrements the 'count' variable to let the player know if the odds are for or against them
*/

var count = 0;

function cc(card) {

    switch(card){
        case 2:
        case 3:
        case 4:
        case 5:
        case 6:
            count++;
            break;
        case 10:
        case 'J':
        case 'Q':
        case 'K':
        case 'A':
            count--;
            break;
    }

    var holdbet = 'Hold'
    if(count > 0) {
        holdbet = 'Bet'
    }

    return count + " " + holdbet;
}
// example output
cc(2); cc(3); cc(7); cc('K'); cc('A'); 
console.log(cc(4))

count = 0 //resetting counter for second example

cc(2); cc(10); cc(10); cc('K'); cc('A'); 
console.log(cc(4))