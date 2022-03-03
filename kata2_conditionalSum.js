const conditionalSum = function(values, condition) {
  // Your code here
  let sum = 0;
  let test = 0;
  if (condition === "even"){
    test = 0;
  } 
  if (condition === "odd"){
    test = 1;
  }
  for (let value of values){
    if (value % 2 === test){
      sum = sum + value;
    }    
  }
  return sum;
};

console.log(conditionalSum([1, 2, 3, 4, 5], "even"));
console.log(conditionalSum([1, 2, 3, 4, 5], "odd"));
console.log(conditionalSum([13, 88, 12, 44, 99], "even"));
console.log(conditionalSum([], "odd"));