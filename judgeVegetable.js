const judgeVegetable = function(vegetables, metric) {
  let name = '';
  let max = 0;
  for (let veg of vegetables){    
    if (metric in veg){      
      if (veg[metric] > max){
        max = veg[metric];
        name = veg.submitter;
      };
    }
  }    
  return name;
};
const vegetables = [
  {
    submitter: 'Old Man Franklin',
    redness: 10,
    plumpness: 5
  },
  {
    submitter: 'Sally Tomato-Grower',
    redness: 2,
    plumpness: 8
  },
  {
    submitter: 'Hamid Hamidson',
    redness: 4,
    plumpness: 3
  }
];
const metric = 'redness';
console.log(judgeVegetable(vegetables, metric));