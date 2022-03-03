const numberOfVowels = function(data) {
  // Put your solution here
  let vowels = ["a", "e", "i", "o", "u"];
  let sum = 0;
  for (let datum of data){
    if (vowels.indexOf(datum) > -1){
      sum ++;
    }
  }
  return sum;
};

console.log(numberOfVowels("orange"));
console.log(numberOfVowels("lighthouse labs"));
console.log(numberOfVowels("aeiou"));