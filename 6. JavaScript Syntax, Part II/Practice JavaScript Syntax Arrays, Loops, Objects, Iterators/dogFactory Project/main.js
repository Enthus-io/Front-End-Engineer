// Write a function, dogFactory(). It should:

// have 3 parameters: name, breed, and weight (in that order)
// expect name and breed to be strings
// expect weight to be a number
// return an object
// have each of those parameters as keys on the returned object returned with the values of the arguments that were passed in

// Write your code here:

function dogFactory(name, breed, weight) {
    return {
        _name: name,
        _breed: breed,
        _weight: weight,
        get getName() {
            return this._name;
        },
        set setName(newName) {
            this._name = newName;
        },
        get getBreed() {
            return this._breed;
        },
        set setBreed(newBreed) {
            this._breed = newBreed;
        },
        get getWeight() {
            return this._weight;
        },
        set setWeight(newWeight) {
            this._weight = newWeight;
        },
        bark() {
            return 'ruff! ruff!';
        },
        eatTooManyTreats() {
            this._weight++;
        }
    }

}


let dog = dogFactory('Joe', 'Pug', 27);
console.log(dog);
// // Should return { name: 'Joe', breed: 'Pug', weight: 27 }

// Add getters and setters for each of the three properties and change the property names to have an underscore prepended.

// Add two methods to your object: .bark() which returns ‘ruff! ruff!’ and .eatTooManyTreats() which should increment the weight property by 1.


console.log(dog.bark());
dog.eatTooManyTreats();
console.log(dog);