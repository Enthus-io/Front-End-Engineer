// Write your function here:
function lifePhase(age) {
  let phase;

  if (age <= 140 && age >= 0) {

    if (age >= 65) {
      phase = "senior citizen";
    } else if (age >= 20) {
      phase = "adult";
    } else if (age >= 13) {
      phase = "teen";
    } else if (age >= 4) {
      phase = "child";
    } else {
      phase = "baby";
    }
  } else {
    phase = "This is not a valid age";
  }

  return phase;
}







// Uncomment the line below when you're ready to try out your function
console.log(lifePhase(5)) //should print 'child'

// We encourage you to add more function calls of your own to test your code!