function valid(a){
  return a <= 100 && a >= 0? true: false;
}

// Write your function here:
function finalGrade(g1, g2, g3){
  let avg = Math.floor((g1 + g2 + g3) / 30);
  let grade;

  if(valid(g1) && valid(g2) && valid(g3)){
  switch (avg) {
    case 10:
      grade = "A";
      break;
    case 9:
      grade = "A";
      break;
    case 8:
      grade = "B";
      break;
    case 7:
      grade = "C";
      break;
    case 6:
      grade = "D";
      break;
    default:
      grade = "F";
      break;
  }
  }

  return grade;
}





// Uncomment the line below when you're ready to try out your 
console.log(finalGrade(99, 92, 95)) // Should print 'A'

// We encourage you to add more function calls of your own to test your code!