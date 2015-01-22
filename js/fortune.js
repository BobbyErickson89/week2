// TODO: Your job is to write logic that will
// give the user one of three random fortunes
//
// Use the alert("Some text value") function
// to tell the user their fortune.

var fortuneNumber = Math.floor(Math.random() * 3) + 1;

if (fortuneNumber === 1) {
  alert("Beware the sandwisch...");
} else if (fortuneNumber === 2){
  alert("Good things come to those who're late...");
} else {
  alert("Results fuzzy, try again later");
}
