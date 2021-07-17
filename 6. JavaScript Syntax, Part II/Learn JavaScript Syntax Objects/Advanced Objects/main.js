// ADVANCED OBJECTS
// Review

// Let’s review the concepts covered in this lesson:
// The object that a method belongs to is called the calling object.
// The this keyword refers the calling object and can be used to access properties of the calling object.
// Methods do not automatically have access to other internal properties of the calling object.
const robot = {
    model: '1E78V2',
    // JavaScript objects do not have built-in privacy, rather there are conventions to follow.
    // The usage of an underscore before a property name means that the variable is not intend to be directly changed.
    _energyLevel: 50,
    provideInfo: function () {
        return `I am ${this.model} and my current energy level is ${this.energyLevel}.`
    },
    // The value of this depends on where the this is being accessed from.
    // Arrow function have its own bindings to this or super
    // We cannot use arrow functions as methods if we want to access other internal properties.
    wrongInfo: () => {
        return `I am ${this.model} and my current energy level is ${this.energyLevel}.`
    },
    // Setters and getter methods allow for more detailed ways of accessing and assigning properties.
    get getEnergyLevel() {
        if (typeof this._energyLevel === 'number') {
            return 'My current energy level is ' + this._energyLevel
        } else {
            return "System malfunction: cannot retrieve energy level";
        }
    },
    set setEnergyLevel(num) {
        if (typeof num === 'number' && num >= 0) {
            this._energyLevel = num;
        }
        else {
            console.log('Pass in a number that is greater than or equal to 0');
        }
    },
    functionality: {
        beep() {
            console.log('Beep Boop');
        },
        fireLaser() {
            console.log('Pew Pew');
        },
    }

};

console.log(robot.provideInfo());
console.log(robot.wrongInfo());

// Getter methods do not need to be called with a set of parentheses.
// Syntactically, it looks like we’re accessing a property.
console.log(robot.getEnergyLevel)

// Setter methods do not need to be called with a set of parentheses.
// Syntactically, it looks like we’re reassigning the value of a property.
robot.setEnergyLevel = 100;
console.log(robot.getEnergyLevel)


// A factory function is a function that returns an object and can be reused to make multiple object instances.
// Factory functions allow us to create object instances quickly and repeatedly.
let robotFactory = function (model, energyLevel) {
    return {
        model: model,
        energyLevel: energyLevel,
        info: function () {
            console.log(`I am ${this.model} and my current energy level is ${this.energyLevel}.`);
        }
    }
}

const tinCan = robotFactory('P-500', 50);

tinCan.info();


// ES6 introduced some new shortcuts for assigning properties to variables known as destructuring.
function robotFactory2(model, energyLevel) {
    return {
        model,
        energyLevel,
        info: function () {
            console.log(`I am ${this.model} and my current energy level is ${this.energyLevel}.`);
        }
    }
}


const newRobot = robotFactory('P-501', 80);
newRobot.info();

// There are different ways to use object destructuring: one way is the property value shorthand
// and another is destructured assignment to create a variable with the name of an object’s key
// that is wrapped in curly braces { } and assign to it the object.
const { functionality } = robot;
functionality.beep();
