// Write a function, greetAliens(), that takes in an array of strings and uses a for loop to print a greeting with each string in the array.

// The greeting should take the following format:
// “Oh powerful [stringElement], we humans offer our unconditional surrender!”

// Write your code here:

let greetAliens = aliens =>{
    for (let index = 0; index < aliens.length; index++) {
        console.log(`Oh powerful ${aliens[index]}, we humans offer our unconditional surrender!`);
    }
}







// When you're ready to test your code, uncomment the below and run:

const aliens = ["Blorgous", "Glamyx", "Wegord", "SpaceKing"];

greetAliens(aliens);

