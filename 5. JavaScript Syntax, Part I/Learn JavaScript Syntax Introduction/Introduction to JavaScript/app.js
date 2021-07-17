/*
In JavaScript, there are seven fundamental data types:

Number: Any number, including numbers with decimals: 4, 8, 1516, 23.42.
String: Any grouping of characters on your keyboard (letters, numbers, spaces, symbols, etc.) surrounded by single quotes: ' ... ' or double quotes " ... ". Though we prefer single quotes. Some people like to think of string as a fancy word for text.
Boolean: This data type only has two possible values— either true or false (without quotes). It’s helpful to think of booleans as on and off switches or as the answers to a “yes” or “no” question.
Null: This data type represents the intentional absence of a value, and is represented by the keyword null (without quotes).
Undefined: This data type is denoted by the keyword undefined (without quotes). It also represents the absence of a value though it has a different use than null.
Symbol: A newer feature to the language, symbols are unique identifiers, useful in more complex coding. No need to worry about these for now.
Object: Collections of related data.
*/

// String Concatenation
console.log("Hello" + " " + "World")

// Properties
console.log('Teaching the world how to code'.length)

/*
We call, or use, these methods by appending an instance with:

a period (the dot operator)
the name of the method
opening and closing parentheses
*/
console.log('Codecademy'.toUpperCase());

//Built-in Objects
console.log(Math.floor(Math.random() * 100))
console.log(Math.ceil(43.8))
console.log(Number.isInteger(2017))

/*
Let’s take one more glance at the concepts we just learned:

Data is printed, or logged, to the console, a panel that displays messages, with console.log().
We can write single-line comments with // and multi-line comments.
There are 7 fundamental data types in JavaScript: strings, numbers, booleans, null, undefined, symbol, and object.
Numbers are any number without quotes: 23.8879
Strings are characters wrapped in single or double quotes: 'Sample String'
The built-in arithmetic operators include +, -, *, /, and %.
Objects, including instances of data types, can have properties, stored information. The properties are denoted with a . after the name of the object, for example: 'Hello'.length.
Objects, including instances of data types, can have methods which perform actions. Methods are called by appending the object or instance with a period, the method name, and parentheses. For example: 'hello'.toUpperCase().
We can access properties and methods by using the ., dot operator.
Built-in objects, including Math, are collections of methods and properties that JavaScript provides.
*/