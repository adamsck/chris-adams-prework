//Create Word List
var wordList = [
  "Jose Ortiz", 
  "Joel Rosario", 
  "Dean Butler", 
  "Mike Smith",
  "Javier Castellano", 
  
];

//Establish remaining variables
var guessedLetters = []; //letters guessed by user
var guessingWord = []; //underscores to represent the word
var usedGuessingwWords = []; //records which words have been used
var ansWord; //word the user needs to guess
var numGuess =7; //limits user to 7 guesses
var wins = 0; //tracks winning games
var pause = false; // Avoid key press when game is resetting


//Starts game
function initializeGame() {

  // Get a new word
  ansWord = wordList[Math.floor(Math.random() * wordList.length)].toUpperCase();

  // Get underscores for guessingWord from ansWord
  for (var i=0; i < ansWord.length; i++){
    // Put a space instead of an underscore between multi-word options in wordList array
    if (ansWord[i] === " ") {
      guessingWord.push(" ")
    } 
    else {
      guessingWord.push("_ ");
    }
  }
  updateDisplay();
};

//Reset the game
function resetGame() {
  if (usedGuessingwWords.length === wordList.length) {
    usedGuessingwWords = []
    wins = 0
    setTimeout(resetGame, 6000); 
  }
  else {
    pause = false;
    document.getElementById('welcome');
    
    // Get a new word
    ansWord = wordList[Math.floor(Math.random() * wordList.length)].toUpperCase();
    console.log(ansWord)
    // If new word has already been used randomly select another
    if (usedGuessingwWords.includes(ansWord) === true) {
      resetGame();
    }

    // Reset word arrays
    guessedLetters = [];
    guessingWord = [];

    // Reset the guessed word
    for (var i=0; i < ansWord.length; i++){
      // Put a space instead of an underscore between multi-word options in possibleWords array
      if (ansWord[i] === " ") {
        guessingWord.push(" ")
      } 
      else {
        guessingWord.push("_ ");
      }
    }
    updateDisplay();
  }
};

// Update the Display
function updateDisplay () {
  document.getElementById("totalWins").innerText = wins;
  document.getElementById("currentWord").innerText = guessingWord.join("");
  document.getElementById("remainingGuesses").innerText = numGuess;
  document.getElementById("guessedLetters").innerText =  guessedLetters.join(" ");
};

// Wait for key press
document.onkeydown = function(event) {
  // Make sure key pressed is an alpha character
  if (isLetter(event.key) && pause === false) {
  checkForLetter(event.key.toUpperCase());
  }
  document.getElementById('welcome');
};

// Check if key pressed is between A-Z or a-z
var isLetter = function(ch){
  return typeof ch === "string" && ch.length === 1
  && (ch >= "a" && ch <= "z" || ch >= "A" && ch <= "Z");
};

// Check if letter is in word
function checkForLetter(letter) {
  var foundLetter = false;

  // Search string for letter
  for (var i=0; i < ansWord.length; i++) {
    if (letter === ansWord[i]) {
      guessingWord[i] = letter
      foundLetter = true
      // If guessing word matches random word
      if (guessingWord.join("") === ansWord) {
        // Increment # of wins and add word to usedGuessingWords
        wins++
        // Add word to usedGuessingWords array to not be repeated
        usedGuessingwWords.push(ansWord)
        console.log(usedGuessingwWords)
        pause = true;
        updateDisplay();
        setTimeout(resetGame, 4000);
      }
    }
  }
  if (foundLetter === false) {
    // Check if inccorrect guess is already on the list
    if (guessedLetters.includes(letter) === false) {
      // Add incorrect letter to guessed letter list
      guessedLetters.push(letter)
      // Decrement the number of remaining guesses
      numGuess--
    }
    if (numGuess === 0) {
      // Add word to usedGuessingWords array to not be repeated
      usedGuessingwWords.push(ansWord);
      console.log(usedGuessingwWords)
      // Display word before reseting game
      guessingWord = ansWord.split();
      pause = true;
      setTimeout(resetGame, 4000);
    }
  }
  updateDisplay();
};

initializeGame();