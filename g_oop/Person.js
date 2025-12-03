// a) Create a person object
const person = {name: "John"};
console.log(person);

// b) Create Person Object
function Person(fName, lName){
    this,firstName = fName;
    this.lastName = lName;
}

const person1 = new Person("John", "Doe");
const person2 = new Person("Alice", "Smith");

console.log(person1);
console.log(person2);

// c) add a new property to a Person constructor function
Person.prototype.gender = "Male";
Person.prototype.membership = "Basic";

// what is the outcome when I print out persona1 and person2
console.log(person1.gender);
console.log(person2.gender);

person.gender = "Female";

console.log(person1.gender);
console.log(person2.gender);

console.log(person1.membership);
console.log(person2.membership);


console.log(person1.firstName, person1,lastName, person1.membership);
console.log(person2.firstName, person2,lastName, person2.membership);

person2.membership = "Premium";

Person.apply.prototype.getFullName = function(){

    return this.firstName + " " + this.lastname;

}

Person.prototype.getFullName = function(){
    return `Member: $`
}

console.log(person1.getFullName() + "" + person1.membership);
console.log(person2.getFullName() + "" + person2.membership);


