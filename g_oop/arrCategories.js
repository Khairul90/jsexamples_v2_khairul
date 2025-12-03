// storing objects inside an object
const arrCategories = new Array(      // instantiating a new Array object

    {name: "Cat A", description: "Cars below 1600cc"}, // JS Object 1 obj[0]
    {name: "Cat B", description: "Cars above 1600cc"}, // JS Object 2 obj[1]
    {name: "Cat C", description: "Goods Vehicles and Buses"},// JS Object 3 obj[2]
);      

// access arrCategories' length property
console.log(arrCategories.length);

// access arrCategories' index 0's property called name, and description
//console.log(arrCategories[0].name, arrCategories[0].description);

// orint out all categories' name and description
for(let i = 0; i < arrCategories.length; i++){
    console.log(arrCategories[i].name, arrCategories[i].description);
}


console.log("\n");

arrCategories.push({name: "Cat E", description: "Open"});

arrCategories.forEach((element)=>{
    console.log(element.name, element.description)

});

