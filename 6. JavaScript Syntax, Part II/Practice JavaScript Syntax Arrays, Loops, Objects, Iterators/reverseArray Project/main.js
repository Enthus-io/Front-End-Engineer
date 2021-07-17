// Write a function, reverseArray(), that takes in an array as an argument and returns a new array with the elements in the reverse order.

// There’s a built-in method that does a lot of this work for you, but here you’re not allowed to use it.

// Write your code here:
let reverseArray = function(sentence){
    let i = sentence.length;

    let reverseSentence = [];

    sentence.forEach(element => {
        reverseSentence[i - 1] = element;
        i--;
    });

    return reverseSentence;
}







// When you're ready to test your code, uncomment the below and run:

const sentence = ['sense.','make', 'all', 'will', 'This'];

console.log(sentence) 
console.log(reverseArray(sentence)) 
// Should print ['This', 'will', 'all', 'make', 'sense.'];


