const sum = (function() {
    //return function sum(x, y, z){
        //const args = [ x, y, z ];
    //using the 'rest' operator (...) makes the above redundant, also allows dynamic amount of arguments, converts into one array
    return function sum(...args){
        return args.reduceRight((a,b) => a + b, 0);
    };
})();

//calling same function with different number of arguments
console.log(sum(1, 2, 3)); // 1+2+3 = 6
console.log(sum(1, 2, 3, 4)); // 1+2+3+4 = 10
console.log(sum(1, 2, 3, 4, 5, 6)); // 1+2+3+4+5+6 = 21