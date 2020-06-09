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
//1. use prompt to ask the user how many times we want to generate a random quote
//2. check if the prompt give us something between 1 and 5
//3. we're going to use a loop somewhere, and it's going to last the number of times that the user entered in the prompt!
//4. refactor our code into a function, and put the function call inside the loop
//4.1 generate random numbers
//4.2 show the generated quotes


const generateQuote = () => {
  var firstQ = Math.floor(Math.random() * firstQuotes.length)
  var secondQ = Math.floor(Math.random() * secondQuotes.length)
  var thirdQ = Math.floor(Math.random() * thirdQuotes.length)
  for (var i = 0; i < firstQuotes.length + secondQuotes.length + thirdQuotes.length; i++);
  var quote = firstQuotes[firstQ] + " " + secondQuotes[secondQ] + " " + thirdQuotes[thirdQ];
  return quote;
};

const numberOfQuotes = prompt('How many random quotes do you want to generate? (1 to 5)');
if (numberOfQuotes >= 1 && numberOfQuotes <= 5) {
	for (let i = 0; i < numberOfQuotes; i++) {
		let quote = generateQuote();
		console.log(quote);
	}
} else {
	console.error('We need a number between 1 and 5');
}





