// Objective
// Whale Talk
// Take a phrase like ‘turpentine and turtles’ and translate it into its “whale talk” equivalent: ‘UUEEIEEAUUEE’.

// There are a few simple rules for translating text to whale language:

// There are no consonants. Only vowels excluding “y”.
// The u‘s and e‘s are extra long, so we must double them in our program.
// Once we have converted text to the whale language, the result is sung slowly, as is a custom in the ocean.

let input = 'turpentine and turtles';
let vowels = ['a', 'e', 'i', 'o', 'u', 'y'];
let resultArray = [];

for (let i = 0; i < input.length; i++) {
    for (let j = 0; j < vowels.length; j++) {
        if (input[i] === vowels[j]) {
            resultArray.push(input[i]);

            if (input[i] === 'e' || input[i] === 'u') {
                resultArray.push(input[i]);
            }
            break;
        }
    }
}

console.log(resultArray.join('').toUpperCase());