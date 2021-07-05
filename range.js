
const range = function(start, end, step){
  if (start === undefined || end === undefined || step === undefined){
    return [];
  }
  if (start > end){
    return [];
  }
  if (step <= 0){
    return [];
  }
  let arr = [];
  for (let i = start; i <= end; i += step){
    arr.push(i);
  }
  return arr;
};
console.log(range(0, 10, 2));	//[ 0, 2, 4, 6, 8, 10 ]
console.log(range(10, 30, 5));	//[ 10, 15, 20, 25, 30 ]
console.log(range(-5, 2, 3)); //[ -5, -2, 1 ]