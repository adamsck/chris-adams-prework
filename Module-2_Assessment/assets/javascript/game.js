//Create Word List
var wordList = [
  "Jose Ortiz", 
  "Joel Rosario", 
  "Dean Butler", 
  "Mike Smith",
  "Javier Castellano", 
  
];

//Establish additional variables
var ansWord; //word the user needs to guess
var guessingWord = []; //underscores to represent the word

//Starts game choosing from full set words in the wordList
function initializeGame() {

  // Get a new word
  ansWord = wordList[Math.floor(Math.random() * wordList.length)].toUpperCase();

  // Get underscores for guessingWord from ansWord making sure that words with spaces get a space instead of a _
  for (var i=0; i < ansWord.length; i++){
    if (ansWord[i] === " ") {
      guessingWord.push(" ")
    } 
    else {
      guessingWord.push("_ "); //added space after _ to avoid the display looking like a solid line
    }
  }
  updateDisplay();
};