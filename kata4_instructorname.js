const instructorWithLongestName = function(instructors) {
  // Put your solution here
  let longestname = "";
  let obj = {};
  for (let instructor of instructors){
    if (instructor.name.length > longestname.length){
      longestname = instructor.name;
      obj = instructor;
    }
  }
  return obj;
};

console.log(instructorWithLongestName([
  {name: "Samuel", course: "iOS"},
  {name: "Jeremiah", course: "Web"},
  {name: "Ophilia", course: "Web"},
  {name: "Donald", course: "Web"}
]));
console.log(instructorWithLongestName([
  {name: "Matthew", course: "Web"},
  {name: "David", course: "iOS"},
  {name: "Domascus", course: "Web"}
]));