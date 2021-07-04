const finalPosition = function(moves){
  let final = [];
  let x = 0;
  let y = 0;
  for (let move of moves){
    if (move === "north"){
      y += 1;
    }
    if (move === "south"){
      y -= 1;
    }
    if (move === "east"){
      x += 1;
    }
    if (move === "west"){
      x -= 1;
    }
  }
  final.push(x);
  final.push(y);
  return final;
}
const moves = ['north', 'north', 'west', 'west', 'north', 'east','north'];
console.log(finalPosition(moves));