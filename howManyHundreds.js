const howManyHundreds = function(n){
  return (n - n % 100) / 100;
}
console.log(howManyHundreds(1000));
console.log(howManyHundreds(894));
console.log(howManyHundreds(520));
console.log(howManyHundreds(99));
console.log(howManyHundreds(0));