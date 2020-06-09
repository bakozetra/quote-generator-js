// all the quotes

var firstQuotes = [
    "Jesus loves me",
    "I love Jesus",
    "everyone are the same",
     "I love singing",
     " everything will be OK"
];
var secondQuotes = [
    "lovely life",
    " you are good",
    " all your life",
    " smell is goog to have",
    " learn to be happy"
];
var thirdQuotes = [
  " this good",
  " best to learn",
  " remember the lesson",
  " keep smell even if it is hard",
  "helping is good "
];

function newQuotes() {
var firstQ = Math.floor(Math.random() * firstQuotes.length)
var secondQ = Math.floor(Math.random() * secondQuotes.length)
var thirdQ = Math.floor(Math.random() * thirdQuotes.length)
for( var i = 0 ; i < firstQuotes.length + secondQuotes.length + thirdQuotes.length ; i++);
var newQuotes = firstQuotes[firstQ]+ " " +secondQuotes[secondQ] + " " + thirdQuotes[thirdQ];
return  newQuotes;

// test the result

  
 }
 console.log(newQuotes()); 




 //1. use prompt to ask the user how many times we want to generate a random quote
//2. check if the prompt give us something between 1 and 5
//3. we're going to use a loop somewhere, and it's going to last the number of times that the user entered in the prompt!
//4. refactor our code into a function, and put the function call inside the loop
//4.1 generate random numbers
//4.2 show the generated quotes
let numberQuotes = prompt( `this the result  bettween 1 to 5`);
  for ( let i = 0 ; i <= numberQuotes.length ; i ++);{
      var firstQ = Math.floor(Math.random() * firstQuotes.length)
      var secondQ = Math.floor(Math.random() * secondQuotes.length)
      var thirdQ = Math.floor(Math.random() * thirdQuotes.length)
      for( var i = 0 ; i < firstQuotes.length + secondQuotes.length + thirdQuotes.length ; i++);
      var newQuotes = firstQuotes[firstQ]+ " " +secondQuotes[secondQ] + " " + thirdQuotes[thirdQ];
    if ( numberQuotes <=  newQuotes ) {
     console.log (newQuotes);
    }
   else {
     console.log(newQuotes * 0)
    } 
}
