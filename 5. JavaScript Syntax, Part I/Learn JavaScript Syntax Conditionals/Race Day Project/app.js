let raceNumber = Math.floor(Math.random() * 1000);

let isRegisterEarly = true;

let age = 18;

if(isRegisterEarly && age > 18){
  raceNumber += 1000;
}

if(isRegisterEarly && age > 18){
  console.log("Your number is " + raceNumber + ", race starts at 0930.");
}else if(age > 18){
  console.log("Your number is " + raceNumber + ", race starts at 1100.");
}
else if(age < 18){
  console.log("Your number is " + raceNumber + ", race starts ar 1230.");
}else{
  console.log("See the registration desk.")
}