// Write your function here:
function tipCalculator(quality, total) {
  let tipTotal = 0;

  if (quality === 'bad') {
    tipTotal = total * 0.05;
  } else if (quality === 'ok') {
    tipTotal = total * 0.15;
  } else if (quality === 'good') {
    tipTotal = total * 0.20;
  } else if (quality === 'excellent') {
    tipTotal = total * 0.30;
  } else {
    tipTotal = total * 0.18;
  }

  return tipTotal;
}

// Uncomment the line below when you're ready to try out your function
console.log(tipCalculator('good', 100)) //should return 20

// We encourage you to add more function calls of your own to test your code!
