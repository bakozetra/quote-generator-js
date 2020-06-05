// Types of qoutes

var firstQuotes = [
    "Jesus loves me",
    "I love Jesus",
    "everyone are the same",
     "I love singing"
];
var secondQuotes = [
    "lovely life",
    " you are good",
    " all your life"
];
var thirdQuotes =[
  " this good",
  " best to learn",
  " remember the lesson"
];

console.log(firstQuotes);
console.log(secondQuotes);
console.log(thirdQuotes);

var firstQ = Math.floor(Math.random() * firstQuotes.length)
var secondQ = Math.floor(Math.random() * secondQuotes.length)
var thirdQ = Math.floor(Math.random() * thirdQuotes.length)
for( var i = 0 ; i < firstQuotes.length + secondQuotes.length + thirdQuotes.length ; i++)
var newQuotes = firstQuotes[firstQ]+ " " +secondQuotes[secondQ] + " " + thirdQuotes[thirdQ];
  
  console.log(newQuotes);
 var funny = prompt("this is the result");
