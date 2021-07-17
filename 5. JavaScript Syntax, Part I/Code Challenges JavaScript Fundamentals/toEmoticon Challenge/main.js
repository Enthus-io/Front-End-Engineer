// Write your function here:
function toEmoticon(emotion) {
  let symbol;

  switch (emotion) {
    case 'shrug':
      symbol = '|_{"}_|';
      break;
    case 'smiley face':
      symbol = ':)';
      break;
    case 'frowny face':
      symbol = ':(';
      break;
    case 'winky face':
      symbol = ';)';
      break;
    case 'heart':
      symbol = '<3';
      break;
    default:
      symbol = '|_(* ~ *)_|';
      break;
  }

  return symbol;
}


// Uncomment the line below when you're ready to try out your function
console.log(toEmoticon("whatever")) 
// Should print  '|_(* ~ *)_|'