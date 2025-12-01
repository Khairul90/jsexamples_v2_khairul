// 1. Primitive data type

let pi = 3.142;     // variable with a number of 3.142
console.log(pi);

let strValue = "Hello"; // variable (camelCase naming convention) with a value of "Hello"
console.log(typeof strValue);

let boolVlaue = true;   // variable storing a boolean of true
console.log(typeof boolVlaue);

let nullValue = null;
console.log(typeof nullValue);

let undefinedValue;     // variable that is declared BUT uninitialised
console.log(typeof undefinedValue)

// 2. Non-primitive Types

let arr = ["a", "b", "c"];  // An array of 3 elelments, starting index: 0. 1,2
console.log(arr);

let faang = new Array(); // Declare a new INSTANCE of an Array called faang
faang[0] = "Facebook";   // Store the value of "Facebook" to index[0] of the array
faang[1] = "Amazon";     // Store the value of amazon to index position 1 of the array
console.log(faang);     // Print the array
// what is i only want to print out index[0]'s value
console.log(faang[0]);  // Accessing the value from index position 0 from array: faang
console.log(faang[1]);  // Accessing the value from index position 1 from array: faang

let person = { name: "Sam", age: 42 };
console.log(`Name: , ${person.name}`);
console.log(`Age:  , ${person.age}`);

let vehicle = new Object(); // Declaring a new INSTANCE of an Object called vehicle
vehicle.name = "Suzuki";    // Giving the vehicle object a PROPERTY called "name" and assigning a value: "Suzuki"
vehicle.model = "Swift";    // Giving the vehicle object a PROPERTY called "model" and assigning a value: "Swift"
vehicle.color = "Blue";     // ? what other related properties can be associated with the vehicle object

let announce = function () { console.log("Hello JS"); };

announce();

let announce2 = () => { console.log("Hello JS agaion."); };
announce2();

// 3. Declaring variables using let, const and var
const PI = 3.14159;       // Declare a immutable variable called PI
//PI = 3.142;             // Update PI's value because it is mutable
console.log(PI);

function greet() {
    let greeting = "Welcome FSD learners";
    console.log(greeting);
}


var localMsg = "Wlcome FSD Developers";

function Welcome() {
    var localMsg = "Welcome to Full stack development";
    console.log(localMsg);
}

console.log(localMsg);

// 4. Type Casting

// Converting values to numbers using the Number object
console.log(Number("3.142"));
console.log(Number(Math.PI));
console.log(Number("   "));
console.log(Number(""));
console.log(Number("88 88"));
console.log(Number("Steve"));

console.log(String(new Date()));
console.log(String("98765"));
console.log(String(98765));

// let's try abit of a trivia using a prompt in the web browser
function greetUser() {
    let userName = prompt("please enter your name");

    if (userName) {   // what if the user enters a series of spaces, what happens
        alert(`Welcome to FSD ${userName}.`);
    }
}

greetUser();
