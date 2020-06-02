//javascript document
var $ = function (id) {
  return document.getElementById(id);
}

//Declare Variables
  var wordList= ["Dean Butler","Jose Ortiz","Javier Castellano","Joel Rosario","Mike Smith"] //possible words
  var ansWord = math.floor(math.random()*5) //pick at random
  var wordtoGuess = wordList[ansWord]; //use random word as word to be guessed
  var wordLength = wordtoGuess.length; //determine length of word to be guessed
  var display = [wordLength]; //number of underscores to be displayed
  var win = wordLength; //nuber of letters to correctly guess to win
  var letters = wordtoGuess.split(""); //stores each of the letters in wordtoGuess as a character in array
  var guessesLeft = 7; //starts user at 7 attempts
  var output = ""; // displays letters as user guesses
  var guess = ""; //the letter the user guessed on the given turn 

  //Word Selection Test
  alert(wordtoGuess); 

  //Update Output
  var setup =function ()
  {
    for (var i=0; i<this.wordtoGuess.length; i++)
    {
      display[i] ="_ ";
      output = output + display [i];
    }
    document.getElementById("wordList").innerHTML = output;
    output ="";
  }
