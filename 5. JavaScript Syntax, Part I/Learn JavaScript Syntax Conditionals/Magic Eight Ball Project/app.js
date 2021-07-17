let userName = "";
userName ? console.log(`Hello, ${userName}!`): console.log("Hello!");

let userQuestion = "What is your question?";
console.log(userQuestion);

let randomNumber = Math.floor(Math.random() * 8);
let eightBall = "";

switch(randomNumber) {
  case 0:
    eightBall = 'It is certain';
    break;
  case 1:
    eightBall = 'Reply hazy try again';
    break;
  case 2:
    eightBall = 'It is decidedly so';
    break;
  case 3:
    eightBall = 'Cannot predict now';
    break;
  case 4:
    eightBall = 'My sources say no';
    break;
  case 5:
    eightBall = 'Do not count on it';
    break;
  case 6:
    eightBall = 'Signs point to yes';
    break;
  case 7:
    eightBall = 'Outlook not so good';
    break;
  default:
    // code block
    break;
}

console.log(randomNumber + ". " + eightBall);