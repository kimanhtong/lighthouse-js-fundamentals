const smartGarbage = function (trash, bins){
  console.log("Garbage type: "+ trash);
  console.log("Garbage bin: ");
  console.log(bins);
  for (let key in bins){
    if (trash === key){
      bins[key]++;
    }
  }
  console.log("New garbage bin:")
  return bins;
}
console.log(smartGarbage('recycling', { waste: 4, recycling: 2, compost: 5 }));
