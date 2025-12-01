// 1. Trim a string
let wordWithTrim = "   FSD   ";
console.log(`"${wordWithTrim.trim()}"`);
console.log(`"${wordWithTrim.trimStart()}"`);
console.log(`"${wordWithTrim.trimEnd()}"`);

// 2. toString (convert a number to a string)
let statusCode = 404;
console.log(typeof statusCode.toString());
console.log(typeof String(statusCode).toString());

// 3. TypeCast boolean data type to a string
let boolVal = true; 
console.log(typeof String(boolVal).toString());

// 4. Splitting a string
let fullName = "John Doe";
let splitName = fullName.split(" "); // what is returned?
console.log(splitName.length); ["John", "Doe"];
console.log(`Welcome ${splitName[0]} ${splitName[1]}, to our site!`);

// 5. Split a string and obtain a string by X elements
let sentence = "Hello World JS Coders";
let splitInstances = sentence.split(" ", 3);
console.log(splitInstances);    // ["Hello", "World", "JS"]