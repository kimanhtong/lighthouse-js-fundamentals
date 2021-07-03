let x = 100;
while (x <= 200){
  if (x % 3 === 0 && x % 4 === 0){
    console.log ("LoopyLighthouse");
  } 
  if (x % 3 === 0 && x % 4 !== 0) {
    console.log("Loopy");
  }
  if (x % 3 !== 0 && x % 4 === 0) {
    console.log("Lighthouse");
  }
  if (x % 3 !== 0 && x % 4 !== 0) {
    console.log(x);
  }
  x ++;
}

const chorus = "Let's dance!";
for (let repeat = 0; repeat < 10; repeat++) {
  console.log(chorus);
}
console.log("Until the sun comes up!");