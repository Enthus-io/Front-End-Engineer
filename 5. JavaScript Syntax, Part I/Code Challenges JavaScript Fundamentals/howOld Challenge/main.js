// Write your function here:
function howOld(age, year) {
  let s;
  let dateToday = new Date();
  let thisYear = dateToday.getFullYear();
  const yearDifference = year - thisYear;
  const newAge = age + yearDifference;

  if (newAge > age) {
    s = `You will be ${newAge} in the year ${year}`;
  } else if (newAge < 0) {
    s = `The year ${year} was ${-newAge} years before you were born`;
  } else {
    s = `You were ${newAge} in the year ${year}`;
  }

  return s;
}


// Once your function is written, write function calls to test your code!
console.log(howOld(10, 2000));