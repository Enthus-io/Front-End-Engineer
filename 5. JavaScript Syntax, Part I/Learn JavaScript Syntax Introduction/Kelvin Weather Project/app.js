// Forecast
const kelvin = 300;

// Converting to celsius
let celsius = kelvin - 273;

//Converting to fahrenheit
let fahrenheit = Math.floor(celsius * (9 / 5) + 32);
console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`)