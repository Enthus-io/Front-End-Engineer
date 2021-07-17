// DEBUGGING JAVASCRIPT CODE
// Debugging Review

// I. Is your code throwing errors? If so, read the error stack trace for the type, description, and location of the error. Go to the error’s location and try to fix.


// READING ERROR STACK TRACES
// Based on the following error stack trace, fill in the answers to the questions below:

// ------------------------------------------------------------------

// /home/ccuser/workspace/learn-javascript-debugging-code/script.js:5
// if (numberSum > total;) {
//                      ^
            
// SyntaxError: Unexpected token ;

// ------------------------------------------------------------------

// From what file was this error thrown?
// 1 - Answer: script.js
// On what line of that file was this error thrown?
// 2 - Answer: 5
// What type of error was thrown in this stack trace?
// 3 - Answer: SyntaxError
// What is the description of the error in this stack trace?
// 4 - Answer: Unexpected token ;


// DEBUGGING SYNTAX ERRORS
// 1. Run your code. Using the first error’s stack trace, identify the error’s type, description, and location.
// 2. Go to the file name and line number indicated by the error stack trace. Using the error type and description, identify the bug in your code.
// 3. Fix the bug and re-run your code.
// 4. Repeat steps 1-3 until your code no longer throws any errors.


// JAVASCRIPT ERROR TYPES
myVariable++;
// 1 - What type of error will be thrown on the line above: ReferenceError - This error will be thrown if you try to use a variable that does not exist.

const myString = 42;
myString.substring(0);
// 2 - What type of error will be thrown on the line above: TypeError - This error will be thrown if you attempt to perform an operation on a value of the wrong type.

const myRandomNumber; = Math.random();
// 3 - What type of error will be thrown on the line above: SyntaxError - This error will be thrown when a typo creates invalid code — code that cannot be interpreted by the compiler.


// II. Is your code broken but not throwing errors? Walk through your code using console.log() statements. When unexpected results occur, isolate the bug and try to fix it.
// III. Did you locate the bug using steps I and II, but can’t fix the bug? Consult documentation to make sure you are using all JavaScript functionality properly. If you are still stuck, Google your issue and consult Stack Overflow for help. Read solutions or post your own Stack Overflow question if none exist on the topic.


// DEBUGGING SEMANTIC ERRORS

// Returns the string whose first letter is later in the alphabet. If both first letters are equal, returns null.
function getAccending(string1, string2) {
    const firstLetter1 = string1.charAt(0);
    const firstLetter2 = string2.charAt(0);
    
    if (firstLetter1 === firstLetter2) {
      return null;
    } else if (firstLetter1 > firstLetter2) {
      return string2;
    } else {
      return string1;
    }
  }
  
  // Should return "avocado"
  console.log("getLaterFirstLetter('avocado', 'blueberry') returns: " + getAccending('avocado', 'blueberry'));
  
  // Should return "blueberry"
  console.log("getLaterFirstLetter('zebra', 'blueberry') returns : " + getAccending('zebra', 'blueberry'));
  
  // Should return null
  console.log("getLaterFirstLetter('astro', 'afar') returns: " + getAccending('astro', 'afar'));