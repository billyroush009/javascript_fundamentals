//spread operator example
//allows snapshot definition to arr2 in this example, instead of linking the arrays directly
// * 'arr2 = arr1' means that changing values in arr1 effectively change arr2
// * 'arr2 = [...arr1]' sets arr2 to equal arr1 at it's CURRENT value(s)

const arr1 = ['JAN', 'FEB', 'MAR', 'APR', 'MAY'];

let arr2;

//function is called without external call(?)
(function(){
    //arr2 = arr1; //with this, arr2[0] becomes 'potato'
    arr2 = [...arr1]; //with this, arr2[0] remains 'JAN'
    arr1[0] = 'potato';
})();

console.log(arr2);