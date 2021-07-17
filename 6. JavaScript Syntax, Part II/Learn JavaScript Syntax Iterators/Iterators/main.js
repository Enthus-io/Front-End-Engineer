// ITERATORS
// Review
// All iterator methods takes a callback function that can be pre-defined, or a function expression, or an arrow function.

const artists = ['Picasso', 'Kahlo', 'Matisse', 'Utamaro'];
const numbers = [1, 2, 3, 4, 5];
const things = ['desk', 'chair', 5, 'backpack', 3.14, 100];
const animals = ['hippo', 'tiger', 'lion', 'seal', 'cheetah', 'monkey', 'salamander', 'elephant'];

// .forEach() is used to execute the same code on every element in an array but does not change the array and returns undefined.
artists.forEach(artist => {
    console.log(artist + ' is one of my favorite artists.');
});

// .map() executes the same code on every element in an array and returns a new array with the updated elements.
const squareNumbers = numbers.map(number => {
    return number * number;
});
console.log(squareNumbers);

// .filter() checks every element in an array to see if it meets certain criteria and returns a new array with the elements that return truthy for the criteria.
const onlyNumbers = things.filter(thing => {
    return typeof thing === 'number';
});
console.log(onlyNumbers);

// .findIndex() returns the index of the first element of an array which satisfies a condition in the callback function. It returns -1 if none of the elements in the array satisfies the condition.
const startsWithS = animals.findIndex(ithAnimal => {
    return ithAnimal[0] === 's';
});
console.log(animals[startsWithS]);

// .reduce() iterates through an array and takes the values of the elements and returns a single value.
const newSum = numbers.reduce(function (accumulator, currentValue) {
    console.log('The value of accumulator: ' + accumulator);
    console.log('The value of currentValue: ' + currentValue);
    return accumulator + currentValue;
});
console.log(newSum);
