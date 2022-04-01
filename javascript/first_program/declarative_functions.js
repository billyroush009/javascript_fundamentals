//declarative function
const bicycle = {
    gear: 2,
    /* old and busted
    setGear: function(newGear) {
        "use strict";
        this.gear = newGear;
    }
    */

   //new hotness
   //sets attribute directly
    setGear(newGear) {
        "use strict";
        this.gear = newGear;
    }
};

bicycle.setGear(3);
console.log(bicycle.gear);