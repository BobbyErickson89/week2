// TODO: Write a number guessing game.
//
// Rules: The game will generate a number between 1 and 10,
// inclusive. So, it might generate a 1. Or it might generate
// a 10, or any whole number in between.
//
// The user should enter a number into the text box and then
// click "guess".
//
// You should then tell the user (via alert or another way)
// if her guess was too big, too small, or just right!
//
//
// Look at the HTML, and note that you'll need to
// write two functions:
//
// setGuess(guessValueAsString)
// guess()
//
// Feel free to rename the guessValueAsString parameter

var x = 0;

var randomNumber = Math.floor(Math.random() * 10) + 1;

var clicks = 0;

function guess() {
  clicks = ++clicks;
  if (x > randomNumber) {
    alert("Your guess is a little too high");
  } else if (x < randomNumber){
    alert("Your guess is a little too low");
  } else {
    alert("You guessed right! You guessed in " + clicks + " tries!");
  }
}


function setGuess(guessValueAsString) {
  x = Number(guessValueAsString);
}
