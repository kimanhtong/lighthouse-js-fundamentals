function emotions(myString, myFunc) {
  console.log("I am " + myString + ", " + myFunc(2));
}

// your code goes here
// Call the emotions() function with two arguments
// Argument 1 - "happy" string
// Argument 2 - an inline function expression
emotions("happy", function(n){
  let ha = "";
  for (let i = 0; i < n; i++){
      ha = ha + "ha";
  }
  ha = ha + "!";
  return ha;
});