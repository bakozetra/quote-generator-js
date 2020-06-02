// Types of qoutes

var firstQuotes = [
    "Jesus loves me",
    "I love Jesus",
    "everyone are the same",
     "I love singing"
];
var secondQuotes = [
    "funny life",
    " you are good",
    " all your life"
];

// functions
function generateQuote() {
    var randomNumber1 = Math.floor(Math.random() *  (firstQuotes.length));
    var randomNumber2 = Math.floor(Math.random() *  (secondQuotes.length));
    for (let i = 0; i < firstQuotes.length + secondQuotes.length; i++);
}

//test our code
 var quoteNumbers = prompt("How many quotes you would like to generate?",);
 let quotesArray = [];
  for(let i = 0; i <  quotesArray.length ; i++) {
    if(randomQuote === quotesArray.length) {
        quoteNumbers += 1;
    }
    else {
        quoteNumbers == 0;
  }
  }
  
