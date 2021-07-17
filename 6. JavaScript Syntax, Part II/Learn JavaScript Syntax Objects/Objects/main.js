// Let’s review:
// Objects store collections of key-value pairs.
// Each key-value pair is a property—when a property is a function it is known as a method.


// An object literal is composed of comma-separated key-value pairs surrounded by curly braces.
let spaceship = {
    shipID: 'Earth',
    'In Service': true,
    land: function () {
        console.log('Warp Stop!');
    }
};

// You can access, add or edit a property within an object by using dot notation or bracket notation.
console.log(spaceship.shipID);
console.log(spaceship['In Service']);
spaceship.color = 'gold';

// You can delete a property from an object with the delete operator.
delete spaceship['color'];
console.log(spaceship);

// We can add methods to our object literals using key-value syntax with anonymous function expressions as values or by using the new ES6 method syntax.
spaceship.takeOff = function () {
    console.log('Spim... Blastoff!');
};
console.log(spaceship);
spaceship.takeOff();

// objects are often nested or an array of even more objects!
spaceship.crew = [
    {
        captain: {
            firstName: 'Eliza',
            age: 31
        }
    },
    {
        pilot: {
            firstName: 'Manuel',
            age: 27
        }
    },
    {
        medic: {
            firstName: 'Irving',
            age: 29
        }
    },
];
console.log(spaceship);

// We can navigate complex, nested objects by chaining operators.
console.log(spaceship['crew'][0]['captain']['firstName']);

// Objects are passed by reference. This means when we pass an object into a function as an argument, the functions can change object properties permanently (even when the object is assigned to a const variable).
let tryReassignment = obj => {
    obj = {
        identified: false,
        'transport type': 'flying'
    }
    console.log(obj)
};

tryReassignment(spaceship) // The attempt at reassignment does not work.
console.log(spaceship); // Still returns old instance;

spaceship = {
    shipID: 'Moon',
    'In Service': true,
    color: 'Black',
    crew: {
            captain: {
                firstName: 'Eliza',
                age: 31
            },
            pilot: {
                firstName: 'Manuel',
                age: 27
            },
            medic: {
                firstName: 'Irving',
                age: 29
            }
        },
    land: function () {
        console.log('Warp Stop!');
    },
    takeOff: function () {
        console.log('Spim... Blastoff!');
    }
}; // Regular reassignment still works.
console.log(spaceship);

// JavaScript iterates through objects with the for...in loop
for(let member in spaceship['crew']){
    console.log(`${spaceship['crew'][member]['firstName']}: ${spaceship['crew'][member]['age']}`);
  }