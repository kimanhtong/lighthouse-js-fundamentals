const sumLargestNumbers = function(data) {
  let max1 = 0;
  let max2 = 0;
  for (let datum of data){
    if (datum >= max1){
      max2 = max1;
      max1 = datum;
    }
    if (datum < max1){
      if (datum > max2){
        max2 = datum;
      }
    }
  }
  return (max1 + max2);
};
console.log(sumLargestNumbers([1, 10]));
console.log(sumLargestNumbers([1, 2, 3]));
console.log(sumLargestNumbers([10, 4, 34, 6, 92, 2]));