// DOM EVENTS WITH JAVASCRIPT
// Review
// Let’s review what you’ve learned:
// Events are user interactions and browser manipulations that you can program to trigger functionality.
// DOM element that listen for an event is called the event target
// We selected our event target from the DOM using document.getElementById('targetElement').
let button = document.getElementById('color-button');
let toggleButton = document.getElementById('toggle-button');
let enable = true;
let randomColor = toggleButton.style.backgroundColor;


function colorValue() {
  return Math.floor(Math.random() * 256);
}


// The block of code that runs when the event happens is called the event handler.
// When an event is triggered on the event target, the registered event handler function executes.
function colorChange(event){
  randomColor = 'rgb(' + colorValue() + ',' + colorValue() + ',' + colorValue() + ')';
  event.target.style.backgroundColor = randomColor;
}

let enableDiableToggle = function(event){
    if(enable++ % 2){
        // Event object properties like .target, .type, and .timeStamp are used to provide information about the event.
        event.target.style.backgroundColor = '#888888';

        // The removeEventListener() method stops specific event handlers from “listening” for specific events firing.
        button.removeEventListener('click', colorChange);
    }
    else{
        event.target.style.backgroundColor = '#141c3a';
        button.addEventListener('click', colorChange);
    }
}

// You can register events to DOM elements using the addEventListener() method.
// The addEventListener() method takes two arguments: an event name in string format and an event handler function.
// The addEventListener() method can be used to add multiple event handler functions to a single event.
button.addEventListener('click', colorChange);

// Event handler functions can also be registered as values of onevent properties of their event target.
toggleButton.onclick = enableDiableToggle;


// Beyond the click event, there are all types of DOM events that can fire in a browser!
// Browsers can fire many other events without a user — you can check out a list of events on the MDN Events Reference page.