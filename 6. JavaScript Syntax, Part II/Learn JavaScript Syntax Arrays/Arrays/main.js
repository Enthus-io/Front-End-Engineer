// ARRAYS
// Review Arrays

// Arrays are lists that store data in JavaScript.
// Arrays are created with brackets [].
const hobbies = ["read", "code", "run", "explore", "gaming"];
console.log(hobbies);

// Each item inside of an array is at a numbered position, or index, starting at 0.
// We can access one item in an array using its index, with syntax like: myArray[0].
let listItem = hobbies[0];

// We can also change an item in an array using its index, with syntax like myArray[0] = 'new string';
// Variables that contain arrays can be declared with let or const. Even when declared with const, arrays are still mutable. However, a variable declared with const cannot be reassigned.
hobbies[2] = "jog";
console.log(hobbies);

// Arrays have a length property, which allows you to see how many items are in an array.
console.log(hobbies.length);

// Arrays have their own methods, including .push() and .pop(), which add and remove items from an array, respectively.
hobbies.push('eat');
console.log(hobbies);
hobbies.pop();
console.log(hobbies);

// Arrays have many methods that perform different tasks, such as .join(), .slice(), .splice(), .shift(), .unshift(), and .concat(), you can find documentation at the Mozilla Developer Network website.
// Some built-in methods are mutating, meaning the method will change the array, while others are not mutating. You can always check the documentation.
let sub = hobbies.slice(1, 4); // .slice is non-mutating.
console.log(sub);
console.log(hobbies);


// Arrays mutated inside of a function will keep that change even outside the function.
function halfArr(ref) {
    ref = ref.splice(0, 3); // .splice is mutating.
}

halfArr(hobbies);
console.log(hobbies);

// Arrays can be nested inside other arrays.
// To access elements in nested arrays chain indices using bracket notation.
// Learning how to work with and manipulate arrays will help you work with chunks of data!
let numberClusters = [[0, 1], [10, 11], [100, 101]];

const target = numberClusters[2][1];
console.log(numberClusters);

console.log('numberClusters[0] = ');
console.log(numberClusters[0]);

console.log('numberClusters[0][0] = ');
console.log(numberClusters[0][0]);

console.log('numberClusters[0][0] = ');
console.log(numberClusters[0][0]);
console.log('numberClusters[0][1] = ');
console.log(numberClusters[0][1]);
