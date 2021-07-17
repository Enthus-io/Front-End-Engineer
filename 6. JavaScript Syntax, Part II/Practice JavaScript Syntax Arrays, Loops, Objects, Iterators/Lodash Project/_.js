// We’ve selected ten methods for you to implement and, in implementing each method, you will follow these four steps:
// Specify the functionality of the method we are implementing
// Ideate a game plan for how to implement this functionality in code
// Implement our game plan
// Test our code to ensure it works as expected


// 3. Specify: The first method we will implement is .clamp().
// Here is a summary of the method:

// .clamp() takes three arguments: a number, a lower bound, and an upper bound
// .clamp() modifies the provided number to be within the two provided bounds
// If the provided number is smaller than the lower bound, it will return the lower bound as the final number
// If the number is larger than the upper bound, it will return the upper bound as the final number
// If the number is already within the two bounds, it will return the number as the final number
// You can see a diagram demonstrating this functionality here.
// To test that our .clamp() method works as expected, run node test/clamp.js in your terminal.
function fc(num, lower, upper) {
    let clampNum;

    if (num < lower) {
        clampNum = lower;
    }
    else if (num > upper) {
        clampNum = upper;
    }
    else {
        clampNum = num;
    }

    return clampNum;
}


// 7. Specify: The next number method we will implement is .inRange().
// Here is a summary of the method:

// .inRange() takes three arguments: a number, a start value, and an end value
// .inRange() checks to see if the provided number falls within the range specified by the start and end values
// If the provided number is smaller than the start value, .inRange() will return false
// If the provided number is larger than or equal to the end value, .inRange() will return false
// If the provided number is within the start and end values, .inRange() will return true
// If no end value is provided to the method, the start value will be 0 and the end value will be the provided start value
// If the provided start value is larger than the provided end value, the two values should be swapped
// To test that our .inRange() method works as expected, run node test/in-range.js in your terminal.
function fir(num, start, end) {
    let isInRange = false;

    if (end === undefined) {
        end = start;
        start = 0;
    }

    if (start > end) {
        let t = start;
        start = end;
        end = t;
    }

    if (num >= start && num < end) {
        isInRange = true;
    }

    return isInRange;
}


// 11. pecify: The first string method we will implement is .words(). We will be writing a slightly modified version of this method to save you some time.
// Here is a summary of what your method should do:

// .words() takes one argument: a string
// .words() splits the string into an array of words
// A word is defined by a space-separated string of characters, so each space character, ' ', indicates the end of one word and the start of the next
// Note: You may have noticed in the documentation that this function has a pattern parameter. Your method does not need to accept the additional pattern parameter, we will only split our string into words based on spaces
// To test that our .words() method works as expected, run node test/words.js in your terminal.

function fw(phrase) {
    let wordsList = phrase.split(' ');

    return wordsList;
}


// 15. Specify: The next string method we will implement is .pad(). We will be writing a slightly modified version of this method to save you some time.
// Here is a summary of what your method should do:

// .pad() takes two arguments: a string and a length
// .pad() adds spaces evenly to both sides of the string to make it reach the desired length
// Extra padding is added to the end of the string if an odd amount of padding is required to reach the specified length
// Your method does not need to accept the additional chars parameter; we will only add space characters to pad our string
// To test that our .pad() method works as expected, run node test/pad.js in your terminal.

function fp(phrase, length) {
    let padding = length - phrase.length;

    if (padding % 2 === 1) {
        phrase = phrase + ' ';
    }

    while (padding > 1) {
        phrase = ' ' + phrase + ' ';

        padding -= 2;
    }

    return phrase;
}


// 19. Specify: Let’s begin implementing .has(). We will be writing a slightly modified version of this method to save you some time.
// Here is a summary of what your method should do:

// .has() takes two arguments: an object and a key
// .has() checks to see if the provided object contains a value at the specified key
// .has() will return true if the object contains a value at the key and will return false if not
// Your method does not need to accept the additional path parameter; we will only check for unnested values
// Test: To test that our .has() method works as expected, run node test/has.js in your terminal.

function fh(item, key) {
    let hasValue = false;

    if (item[key] !== undefined) {
        hasValue = true;
    }

    return hasValue;
}


// 23. Specify: The next object method we will implement is .invert(). Read the explanation and examples of the method in the linked documentation to get a sense of how the method should work.

// Here is a summary of what your method should do:

// .invert() takes one argument: an object
// .invert() iterates through each key / value pair in the provided object and swaps the key and value
// To test that our .invert() method works as expected, run node test/invert.js in your terminal.

function fi(items) {
    invertedItems = {};
    let originalValue;

    for (const key in items) {
        originalValue = items[key];
        invertedItems[originalValue] = key;
    }

    return invertedItems;
}


// Specify: The final object method we will implement is .findKey().
// Here is a summary of what your method should do:

// .findKey() takes two arguments: an object and a predicate function — a function that returns a boolean value
// .findKey() iterates through each key / value pair in the provided object and calls the predicate function with the value
// .findKey() returns the first key that has a value that returns a truthy value from the predicate function
// .findKey() returns undefined if no values return truthy values from the predicate function
// To test that our .findKey() method works as expected, run node test/find-key.js in your terminal.

function ffk(items, func) {
    let foundKey;

    for (const key in items) {
        if (func(items[key])) {
            foundKey = key;
            break;
        }
    }

    return foundKey;
}


// Specify: It’s time to start implementing methods for our final data type: arrays! The first array method we will implement is .drop().
// Here is a summary of what your method should do:

// .drop() takes two arguments: an array and a number representing the number of items to drop from the beginning of the array
// .drop() returns a new array which contains the elements from the original array, excluding the specified number of elements from the beginning of the array
// If the number of elements to drop is unspecified, your method should drop one element
// To test that our .drop() method works as expected, run node test/drop.js in your terminal.

function fd(list, num) {
    let newList = [];

    if (!num) {
        num = 1;
    }

    for (let i = num; i < list.length; i++) {
        newList.push(list[i]);
    }

    return newList;
}


// Specify: The next array method we will implement is .dropWhile().
// Here is a summary of what your method should do:

// .dropWhile() takes two arguments: an array and a predicate function
// The supplied predicate function takes three arguments: the current element, the current element index, and the whole array
// .dropWhile() creates a new copy of the supplied array, dropping elements from the beginning of the array until an element causes the predicate function to return a falsy value
// To test that our .dropWhile() method works as expected, run node test/drop-while.js in your terminal.

function fdw(list, func) {
    let newList = [];
    let start = false;

    for (const index in list) {
        let current = list[index];

        if (!start) {
            start = !func(current, index, list);
        }

        if (start) {
            newList.push(current);
        }
    }

    return newList;
}


// Specify: The last array method we will implement is .chunk(). 
// Here is a summary of what your method should do:

// .chunk() takes two arguments: an array and a size
// .chunk() breaks up the supplied array into arrays of the specified size
// .chunk() returns an array containing all of the previously-created array chunks in the order of the original array
// If the array can’t be broken up evenly, the last chunk will be smaller than the specified size
// If no size is supplied to the method, the size is set to 1
// To test that our .chunk() method works as expected, run node test/chunk.js in your terminal.

function fc(list, size = 1) {
    let newList = [];

    for (let i = 0; i < list.length; i += size) {
        let listChunk = list.slice(i, i + size);

        newList.push(listChunk);
    }

    return newList;
}


// 1. Before we get started implementing our new methods, we need to create an object to
// contain them. This object will represent our library containing all the functionality
// we add to it.
// To run the test suite for this task, type node test/lodash.js in your terminal
const _ = {
    clamp: fc,
    inRange: fir,
    words: fw,
    pad: fp,
    has: fh,
    invert: fi,
    findKey: ffk,
    drop: fd,
    dropWhile: fdw,
    chunk: fc
}




// Do not write or modify code below this line.
module.exports = _;