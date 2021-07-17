// Review Variables
// Nice work! This lesson introduced you to variables, a powerful concept you will use in all your future programming endeavors.

// Let’s review what we learned:

// Variables hold reusable data in a program and associate it with a name.
// Variables are stored in memory.
// The var keyword is used in pre-ES6 versions of JS.
var favoriteFood = 'pizza';
console.log(favoriteFood);

// let is the preferred way to declare a variable when it can be reassigned, and const is the preferred way to declare a variable with a constant value.
let changeMe = true;
changeMe = false;
console.log(changeMe);

let cantChangeMe = true;
// changeMe = false; // This will cuase an error.
console.log(changeMe);

// Variables that have not been initialized store the primitive data type undefined.
// Mathematical assignment operators make it easy to calculate a new value and assign it to the same variable.
let levelUp = 10;
levelUp += 5; // Can be written as levelUp = levelUp + 5
console.log(x); // Output: 15

// The + operator is used to concatenate strings including string values held in variables
let myPet = 'armadillo';
console.log('I own a pet ' + myPet + '.'); // Output: 'I own a pet armadillo.'

// In ES6, template literals use backticks ` and ${} to interpolate values into a string.
const myPet2 = 'armadillo';
console.log(`I own a pet ${myPet2}.`); // Output: I own a pet armadillo.

// The typeof keyword returns the data type (as a string) of a value.
const myPet3 = 'armadillo';
console.log(typeof myPet3); // Output: string
 
const age = 10;
console.log(typeof age); // Output: number
 
const shots = true; 
console.log(typeof shots); // Output: boolean