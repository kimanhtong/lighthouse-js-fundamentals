const raining = true;
const cold = false;
const temperature = 12;

if (raining) {
  console.log("Don't forget your umbrella!");
}

if (temperature < 0) {
  console.log("Make sure you pick out a scarf!");
} else if (temperature < 15) {
  console.log("Short sleeves won't cut it!");
} else {
  console.log("Short sleeves are fine.");
}

console.log("Now you're ready to go outside!");

const isCitizen = true;
const age = 26;

if (isCitizen && age > 18) {
  console.log("You are eligible to vote.");
}

function whichSchool(age) {
  if (age < 13) {
    return "Elementary School";
  } else if (age <= 18){
      return "Secondary School";
    } else {
        return "Lighthouse Labs";
      }  
}