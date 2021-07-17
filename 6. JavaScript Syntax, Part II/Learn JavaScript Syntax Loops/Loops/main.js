// LOOPS
// Review
const mVacationSpots = ['Austin', 'Mountain View', 'SF'];
let uVacationSpots = ['San Jose', 'Austin', 'Miami', 'SF'];

// Loops perform repetitive actions so we don’t have to code that process manually every time.
// How to write for loops with an iterator variable that increments or decrements
// an initialization starts the loop and can also be used to declare the iterator variable.
// if the condition evaluates to true the code block will run, and if it evaluates to false the code will stop.
// an iteration statement is used to update the iterator variable on each loop.
for (let i = 0; i < mVacationSpots.length; i++) {
    console.log('I would love to visit ' + mVacationSpots[i]);
}


// A nested for loop is a loop inside another loop
// Write your code below
let mutualSpots = [];
5
for (let i = 0; i < uVacationSpots.length; i++) {
    for (let j = 0; j < mVacationSpots.length; j++) {
        if (uVacationSpots[i] === mVacationSpots[j]) {
            mutualSpots.push(uVacationSpots[i]);
        }
    }
};

// while loops allow for different types of stopping conditions
// Stopping conditions are crucial for avoiding infinite loops.
let i = mutualSpots.length;

while (i--) {
    console.log('We would love to visit ' + mutualSpots[i]);
}

// do...while loops run code at least once— only checking the stopping condition after the first execution
// The break keyword allows programs to leave a loop during the execution of its block

const rapperArray = ["Lil' Kim", "Jay-Z", "Notorious B.I.G.", "Tupac"];
i = 0;

do {
    if (rapperArray[i] === 'Notorious B.I.G.') {
        console.log(rapperArray[i]);
        console.log('And if you don\'t know, now you know.');
        break;
    }
    i++;

} while (i < rapperArray.length);


// While powerful, the for loop can be a bit cumbersome to set up, prone to errors, and could lead to difficult-to-read code.
// The ES6 version of JavaScript introduced the shorter and more concise for...of loop. 
const recipe = ['cilantro', 'olive oil', 'soy sauce', 'orange', 'lime', 'garlic', 'jalapeno', 'salt', 'black pepper', 'steak']

for (const ingredient of recipe) {
    if (ingredient === 'soy sauce') {
        continue; // The continue statement is used to skip one iteration of the loop.
    }
    console.log(ingredient);
}