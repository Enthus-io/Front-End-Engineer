function getSleepHours(day){

  if(day === 'monday'){
    return 5;
  }else if(day === 'tuesday'){
    return 4;
  }else if(day === 'wednesday'){
    return 6;
  }else if(day === 'thursday'){
    return 5;
  }else if(day === 'friday'){
    return 3;
  }else if(day === 'saturday'){
    return 5;
  }else if(day === 'sunday'){
    return 4;
  }
}

function getActualSleepHours(){
  let sum = 0;

  sum += getSleepHours('monday');
  sum += getSleepHours('tuesday');
  sum += getSleepHours('wednesday');
  sum += getSleepHours('monday');
  sum += getSleepHours('thursday');
  sum += getSleepHours('friday');
  sum += getSleepHours('saturday');
  sum += getSleepHours('sunday');

  return sum;
}

function getIdealSleepHours(){
  return 8 * 7;
}

function calculateSleepDebt(){
  let actualSleepHours = getActualSleepHours();
  let idealSleepHours = getIdealSleepHours();

  if(actualSleepHours === idealSleepHours){
    console.log('Use got perfect amount of sleep.');
  }
  else if(actualSleepHours > idealSleepHours){
    console.log('User got more sleep than needed.');
  }
  else if(actualSleepHours < idealSleepHours){
    console.log('User should get some rest.');
  }

  console.log(`User debt is ${actualSleepHours - idealSleepHours}`);
}

calculateSleepDebt();
