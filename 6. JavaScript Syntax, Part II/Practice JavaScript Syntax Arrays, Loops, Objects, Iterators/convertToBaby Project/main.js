// Write a function, convertToBaby(), that takes in an array as an argument and, using a loop,
// returns a new array with each string in the array prepended with 'baby '.

// Write your code here:

let convertToBaby = (animals) =>{
    let babyAnimals = [];

    animals.forEach(animal => {
        babyAnimals.push('baby ' + animal);
    });

    return babyAnimals
}






// When you're ready to test your code, uncomment the below and run:

const animals = ['panda', 'turtle', 'giraffe', 'hippo', 'sloth', 'human'];

console.log(convertToBaby(animals)) 

