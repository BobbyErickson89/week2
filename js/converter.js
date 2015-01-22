var x = 0;
var y = 0;
var z = 0;

// CUPS AND QUARTS
function cupsToQuarts() {
  alert(x + " cups are " + x / 4 + " quarts");
}

function quartsToCups() {
  alert(x + " quarts are " + x * 4 + " cups");
}

// METERS AND YARDS
function metersToYards() {
  alert(y + " meters are " + y / .9144 + " yards");
}

function yardsToMeters() {
  alert(y + " yards are " + y * .9144 + " meters");
}

// FARENHEIT AND CELSIUS
function farenheitToCelsius() {
  alert(z + " degrees Farenheit is equal to " + ((z - 32) * (5/9)) + " degrees Celsius");
}

function celsiusToFarenheit() {
  alert(z + " degrees Celsius is equal to " + (z * 1.8 + 32) + " degrees Farenheit");
}



function setX(xString) {
  x = Number(xString);
}

function setY(yString) {
  y = Number(yString);
}

function setZ(zString) {
  z = Number(zString);
}
