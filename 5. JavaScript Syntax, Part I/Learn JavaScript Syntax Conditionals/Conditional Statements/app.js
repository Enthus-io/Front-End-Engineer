// CONDITIONAL STATEMENTS
// Review
// Way to go! Here are some of the major concepts for conditionals:

// An if statement checks a condition and will execute a task if that condition evaluates to true.
// if...else statements make binary decisions and execute different code blocks based on a provided condition.
let sale = true;
if(sale) {
  console.log('Time to buy!');
}else{
  console.log('Time to wait for a sale.');
}

// We can add more conditions using else if statements.
let season = 'summer';

if (season === 'spring') {
  console.log('It\'s spring! The trees are budding!');
} else if(season === "winter"){
  console.log("It\'s winter! Everything is covered in snow.");
}else if(season === "fall"){
  console.log("It\'s fall! Leaves are falling!");
}else if(season === "summer") {
  console.log("It\'s sunny and warm because it\'s summer!");
}else {
  console.log('Invalid season.');
}

// Comparison operators, including <, >, <=, >=, ===, and !== can compare two values.
// Here is a list of some handy comparison operators and their syntax:
// Less than: <
// Greater than: >
// Less than or equal to: <=
// Greater than or equal to: >=
// Is equal to: ===
// Is not equal to: !==
let hungerLevel = 8;

if(hungerLevel > 7){
  console.log('Time to eat!')
}else{
  console.log('We can eat later!');
}

// The logical and operator, &&, or “and”, checks if both provided expressions are truthy.
// The logical operator ||, or “or”, checks if either provided expression is truthy.
// The not operator, otherwise known as the bang operator (!), switches the truthiness and falsiness of a value.
let mood = 'sleepy';
let tirednessLevel = 6;

if (mood === "sleepy" && tirednessLevel > 8) {
  console.log('time to sleep');
} else {
  console.log('not bed time yet');
}

// The list of falsy values includes:
// 0
// Empty strings like "" or ''
// null which represent when there is no value at all
// undefined which represent when a declared variable lacks a value
// NaN, or Not a Number
let favoritePhrase;

if (favoritePhrase) {
  console.log("This string doesn't seem to be empty.");
} else {
  console.log('This string is definitely empty.'); // Prints 'This string is definitely empty.'
}

// Truthy and falsy evaluations open a world of short-hand possibilities!
let defaultName = username || 'Stranger';
// Equivalent to:
let defaultName2;
if (username){
  defaultName2 = username;
}
else{
  defaultName2 = 'Stranger';
}

// The ternary operator is shorthand to simplify concise if...else statements.
let isNightTime = true;
 
isNightTime ? console.log('Turn on the lights!') : console.log('Turn off the lights!');
// Equivalent to:
if (isNightTime) {
  console.log('Turn on the lights!');
} else {
  console.log('Turn off the lights!');
}

// A switch statement can be used to simplify the process of writing multiple else if statements. The break keyword stops the remaining cases from being checked and executed in a switch statement.
let athleteFinalPosition = 'first place';

switch (athleteFinalPosition){ //The switch keyword initiates the statement and is followed by ( ... ), which contains the value that each case will compare.
  case "first place":
  console.log('You get the gold medal!');
  break;
  case 'second place': //The case keyword checks if the expression matches the specified value that comes after it.
  console.log('You get the silver medal!');
  break; //The break keyword tells the computer to exit the block and not execute any more code or check any other cases inside the code block. Note: Without break keywords, the first matching case will run, but so will every subsequent case regardless of whether or not it matches
  case 'third place':
  console.log('You get the bronze medal!');
  break;
  default: //At the end of each switch statement, there is a default statement. If none of the cases are true, then the code in the default statement will run.
  console.log('No medal awarded.');
  break;
}