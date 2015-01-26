var hangmanWords = [
"the","of","and","a","to","in","is","you","that","it","he",
"was","for","on","are","as","with","his","they","I","at","be",
"this","have","from","or","one","had","by","word","but","not",
"what","all","were","we","when","your","can","said","there",
"use","an","each","which","she","do","how","their","if","will",
"up","other","about","out","many","then","them","these","so",
"some","her","would","make","like","him","into","time","has",
"look","two","more","write","go","see","number","no","way",
"could","people","my","than","first","water","been","call",
"who","oil","its","now","find","long","down","day","did","get",
"come","made","may","part"
];


// DOES THE SAME THING AS FUNCTION BELOW
// var largeWords = hangmanWords.filter(function(word){
//   return word.length >= 3;
// })


// FILTERING OUT WORDS LESS THAN 3 LETTERS
// setting up filter
function largeWords(words) {
  return words.length >= 3;
}

// calling the function for large words to filter the hangmanWords array;
var bigWords = hangmanWords.filter(largeWords);





//does same thing as function below
// var randomWords = bigWords[Math.floor(Math.random() * bigWords.length)];

// PICKING A RANDOM WORD FROM THE FILTERED ARRAY
var randomWords = gameWords();

function gameWords() {
  return bigWords[Math.floor(Math.random() * bigWords.length)];
}

// SHOWING THE CHOSEN RANDOM WORD IN THE CONSOLE
console.log(randomWords);


// SPLITTING UP THE LETTERS FROM THE RANDOM WORD
var displayWord = randomWords.split('');

// DISPLAYING A DASH ON THE RANDOM LETTERS
var dashedWord = displayWord.map(function(ch){
  return '_';
});

// creat string from displayWord and adds spaces in between each word.
var finalDisplay = dashedWord.join(' ');

// displaying finalDisplay in the HTML document class .hidden-word-display
document.querySelector('.hidden-word-display').textContent = finalDisplay;


var counter = document.querySelector(".guesses-left").textContent = 8;

var userGuess;


var input = document.querySelector(".user-input").textContent = "";


function guess(letterGuess) {
  userGuess = letterGuess;
}

// FUNCTION FOR WHEN GUESS BUTTON IS CHECKED
function checkGuess(){
  for (var i = 0; i < randomWords.length; ++i) {
    if (userGuess === displayWord[i]) {
      dashedWord[i] = userGuess;
    }
  }
  // IF USER GUESS IS WRONG, THEY ARE DECREMENTED A GUESS
  if(randomWords.indexOf(userGuess) === -1){
    document.querySelector(".guesses-left").textContent = --counter;
    // if user runs out of guesses, it runs the alert below and refreshes page
    if(counter <= 0){
      alert("Wow....you really couldn't figure that out?  How about giving it another try");
      window.location.reload();
    };
  }
  // RESETS INPUT TO A BLANK SPACE
  document.querySelector('.user-input').value = "";
  // DISPLAYS
  finalDisplay = dashedWord.join(' ');
  document.querySelector('.hidden-word-display').textContent = finalDisplay;
};
















//
