// JAVASCRIPT AND THE DOM
// Review
// Let’s review what we learned:

// The document keyword grants access to the root of the DOM in JavaScript
// the .querySelector() method allows you to select a specific element with CSS selectors
let element = document.querySelector("button");// Type Selectors

function renovate() {

    // You can also access an element directly by its ID with .getElementById()
    let authorImage = document.getElementById('photo');
    let article = document.querySelector('#article');// ID Selectors

    document.querySelector('body').style.backgroundColor = '#201F2E';

    
    // The .innerHTML and .style properties allow you to modify an element by changing its
    // contents or style respectively
    let author = document.querySelector('.byline');// Class Selectors
    author.innerHTML = 'ARTICLE RENOVATED BY: Luis Ojeda'


    // You can create, append, and remove elements by using the .createElement(),
    let imageCap = document.createElement('p');
    imageCap.classList.add("caption");
    imageCap.innerHTML = 'The local semi- pro soccer team in Seattle, WA plays an international friendly';


    // and .appendChild()
    document.querySelector('.image').appendChild(imageCap);


    // and remove elements by using the .removeChild() methods
    article.removeChild(authorImage);


    // Each DOM element node has a .parentNode and .children property. The property will return
    // a list of the element’s children and return null if the element has no children.
    let first = document.getElementById('relation').firstChild;
    first.parentNode.innerHTML = '<p>I am the parent and my inner HTML has been replaced!</p>';

}

// The .onclick property can add interactivity to a DOM element based on a click event
element.onclick = renovate;