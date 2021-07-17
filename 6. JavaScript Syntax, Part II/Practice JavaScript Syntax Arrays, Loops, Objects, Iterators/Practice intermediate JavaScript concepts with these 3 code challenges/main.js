// Write a function factorial() that takes a number as an argument and returns the factorial of the number.

// Write function below
function factorial(num) {
    let sum = 1;

    for (let i = num; i > 0; i--) {
        sum = sum * i;
    }

    return sum;
}

console.log(factorial(6));
// returns `720` because 6 * 5 * 4 * 3 * 2 * 1 = 720


// Write a function subLength() that takes 2 parameters, a string and a single character. The function should search
// the string for the two occurrences of the character and return the length between them including the 2 characters.
// If there are less than 2 or more than 2 occurrences of the character the function should return 0.

// Write function below
function subLength(word, letter) {
    let occurrences = [];

    for (let i = 0; i < word.length; i++) {
        if (word[i] === letter) {
            occurrences.push(i);
        }
    }

    if (occurrences.length !== 2) {
        return 0;
    }

    return occurrences[1] - occurrences[0] + 1;
}

console.log(subLength('Saturday', 'a')); // returns 6
console.log(subLength('summer', 'm')); // returns 2
console.log(subLength('digitize', 'i')); // returns 0
console.log(subLength('cheesecake', 'k')); // returns 0


// Write a function groceries() that takes an array of object literals of grocery items. The function should return a string
// with each item separated by a comma except the last two items should be separated by the word 'and'.
// Make sure spaces (' ') are inserted where they are appropriate.

// Write function below
// Write function below
function groceries(items) {
    let sentence = '';
    let secondLastWord = items.length - 2;

    for (let i = 0; i < items.length; i++) {
        if (i < secondLastWord) {
            sentence = sentence + items[i].item + ', ';
        }
        else if (i === secondLastWord) {
            sentence = sentence + items[i].item + ' and ';
        }
        else {
            sentence = sentence + items[i].item;
        }
    }

    return sentence;
}

console.log(groceries([{ item: 'Carrots' }, { item: 'Hummus' }, { item: 'Pesto' }, { item: 'Rigatoni' }]));
// returns 'Carrots, Hummus, Pesto and Rigatoni'

console.log(groceries([{ item: 'Bread' }, { item: 'Butter' }]));
// returns 'Bread and Butter'

console.log(groceries([{ item: 'Cheese Balls' }]));
  // returns 'Cheese Balls'