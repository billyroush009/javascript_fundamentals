//array declaration and initialzation
var myPlants = [
    {
        type: "flowers",
        list: [
            "rose",
            "tulip",
            "dandelion"
        ]
    },
    {
        type: "trees",
        list: [
            "fir",
            "pine",
            "birch"
        ]
    }
];
// how to access value of nested array index
var secondTree = myPlants[1].list[1];
console.log(secondTree);