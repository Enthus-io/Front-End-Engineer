// Write your function here:

function calculateWeight(earthWeight, planet) {
  let weight = 0;

  if (planet === 'Mercury')
    weight = earthWeight * 0.378;
  else if (planet === 'Venus')
    weight = earthWeight * 0.907;
  else if (planet === 'Mars')
    weight = earthWeight * 0.377;
  else if (planet === 'Jupiter')
    weight = earthWeight * 2.36;
  else if (planet === 'Saturn')
    weight = earthWeight * 0.916;
  else
    return 'Invalid Planet Entry. Try: Mercury, Venus, Mars, Jupiter, or Saturn.';

  return weight;

}





// Uncomment the line below when you're ready to try out your function
console.log(calculateWeight(100, 'Jupiter')) // Should print 236

// We encourage you to add more function calls of your own to test your code!