// FUNCTIONS
// Review Functions
// In this lesson, we covered some important concepts about functions:
// A function is a reusable block of code that groups together a sequence of statements to perform a specific task.
// A function declaration :
function getReminder(){
  console.log('Water the plants.');
}

// A parameter is a named variable inside a function’s block which will be assigned the value of the argument passed in when the function is invoked:
function sayThanks(name) {
  console.log('Thank you for your purchase '+ name + '! We appreciate your business.');
}

// To call a function in your code:
sayThanks('Jose');

// ES6 introduces new ways of handling arbitrary parameters through default parameters which allow us to assign a default value to a parameter in case no argument is passed into the function.
function makeShoppingList(item1 = "milk", item2 = "bread", item3 = "eggs"){
  console.log(`Remember to buy ${item1}`);
  console.log(`Remember to buy ${item2}`);
  console.log(`Remember to buy ${item3}`);
}

// To return a value from a function, we use a return statement.
function monitorCount(rows, columns) {
  return rows * columns;
  }

const numOfMonitors = monitorCount(5, 4);
console.log(numOfMonitors);

// To define a function using function expressions:
const plantNeedsWater = function(day){
  if(day === 'Wednesday'){
    return true;
  }else{
    return false;
  }
}

console.log(plantNeedsWater('Tuesday'));

// To define a function using arrow function notation:
const grassNeedsWater = (day) => {
  if (day === 'Wednesday') {
    return true;
  } else {
    return false;
  }
};

console.log(grassNeedsWater('Tuesday'));


// Function definition can be made concise using concise arrow notation:
// comparing single line and multiline arrow functions
const treetNeedsWater = day => day === 'Wednesday' ? true : false;

console.log(treeNeedsWater('Tuesday'));