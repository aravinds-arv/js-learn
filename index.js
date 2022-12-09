// this is my last JavaScript Code!
console.log("hello world!!");

// variables
let firstName = "Aravind";
let lastName = "S"
console.log(firstName, lastName);

// multiple assignment
let x = 10, y = 5;
console.log(x+y);

// constants
const hello = "hi";
// hello = "bye" // constants cannot be reassigned!
var world = "mars";
world = "earth"; // variables can be reassigned
console.log(hello, world);

// primitive/value data types
var name = "Aravind S"; // string literal
var age = 20; // number literal
var thisIsABool = true; // boolean
var idk = undefined; // expicit undefined assignment
var nothing = null; // null value

// dynamic typing
var chameleon = "camouflage";
console.log(typeof chameleon)
var chameleon = 80;
console.log(typeof chameleon);

// reference data types

// objects
let person = {
    name: "Aravind S",
    age: 20
};
console.log(person);
console.log("Name: " + person.name + " Age: " + person.age);
// modifying an object
// dot notation
person.name = "John";
console.log(person);
// bracket notation
person['age'] = 30;
console.log(person);

// arrays (technically objects)
selectedColors = ['Red', 'Green','Blue'];
selectedColors[3] = 0 // both length and items are dynamic
console.log(selectedColors)

// functions
function greet(firstName, lastName){
    console.log("Hello " + firstName + " " + lastName)
}
greet("John", "Doe");
greet("Jane", "Doe");

// return values
function square(number) {
    return number * number;
}
console.log(square(5))
