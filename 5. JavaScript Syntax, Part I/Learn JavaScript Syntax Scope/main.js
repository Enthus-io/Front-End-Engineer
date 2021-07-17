// SCOPE
// Review: Scope
// In this lesson, you learned about scope and how it impacts the accessibility of different variables.

// Let’s review the following terms:

// Scope is the idea in programming that some variables are accessible/inaccessible from other parts of the program.
// Global scope refers to the context within which variables are accessible to every part of the program.
// Global variables are variables that exist within global scope.
// Global namespace is the space in our code that contains globally scoped information.
let satellite = 'The Moon';
let galaxy = 'The Milky Way';
let stars = 'North Star';

// Blocks are statements that exist within curly braces {}.
// Block scope refers to the context within which variables that are accessible only within the block they are defined.
// Local variables are variables that exist within block scope.
function callMyNightSky(){
// Scope pollution is when too many variables exist in a namespace or variable names are reused.
  stars = 'Sirius';

  return 'Night Sky: ' + satellite + ', ' + stars + ', and ' + galaxy;
}

console.log(callMyNightSky());

console.log('The variable stars was change to ' + stars);

// Practice Good Scoping
// Tightly scoping your variables will greatly improve your code in several ways:

// It will make your code more legible since the blocks will organize your code into discrete sections.
// It makes your code more understandable since it clarifies which variables are associated with different parts of the program rather than having to keep track of them line after line!
// It’s easier to maintain your code, since your code will be modular.
// It will save memory in your code because it will cease to exist after the block finishes running.