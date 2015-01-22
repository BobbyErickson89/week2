
// Declare two variables, and give them
// values. Note, you can declare multiple
// variables with one var statement by
// placing a comma between the variable
// statements.
var x = 0,
    y = 0;

// add simply alerts the value of x + y
function add() {
  alert(x + y);
}

// subtract simply alerts the value of x - y
function subtract() {
  alert(x - y);
}

// divide alerts x / y
function divide() {
  alert(x / y);
}

// multiply alerts x * y
function multiply() {
  alert(x * y);
}

// mod alerts x % y
function mod() {
  alert(x % y);
}

// setX takes a string as a parameter, casts it
// to a number, and stores that value in x
function setX(xString) {
  x = Number(xString);
}

// setY does the same thing as setX, only
// storing the value in y
function setY(yString) {
  y = Number(yString);
}
