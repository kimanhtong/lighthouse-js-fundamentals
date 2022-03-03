const urlEncode = function(text) {  
  // Put your solution here
  let newtext = "";
  for (let i = 0; i < text.length; i++){
    if (text[i] === " "){
      newtext = newtext + "%20";
    } else {
      newtext = newtext + text[i];
    }
  }
  text = newtext      
  return text;
};
console.log(urlEncode("Lighthouse Labs"));
console.log(urlEncode(" Lighthouse Labs "));
console.log(urlEncode("blue is greener than purple for sure"));