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
function largeWords(words) {
  return words.length >= 3;
}

var bigWords = hangmanWords.filter(largeWords);


//
// var randomWords = bigWords[Math.floor(Math.random() * bigWords.length)];



var randomWords = gameWords();

function gameWords() {
  return bigWords[Math.floor(Math.random() * bigWords.length)];
}

console.log(randomWords);

var displayWord = randomWords.split('');

var dashedWord = displayWord.map(function(ch){
  return '_';
});

var finalDisplay = dashedWord.join(' ');

document.querySelector('.hidden-word-display').textContent = finalDisplay;

var userGuess;

function guess(letterGuess) {
  userGuess = letterGuess;
}

function checkGuess(){
  for (var i = 0; i < randomWords.length; ++i) {
    if (userGuess === displayWord[i]) {
      dashedWord[i] = userGuess;
    }
  }
  finalDisplay = dashedWord.join(' ');
  document.querySelector('.hidden-word-display').textContent = finalDisplay;
}








//
