var name = "Bobby";
var age = 25;
var favoriteFood;

function tellPerson(personName, message) {
  alert(personName + " " + message);
}

tellPerson("Chris", "You need to slow down");
tellPerson("Bernard", "You killed that CSS Project") 

if (age > 30) {
  alert("You need to get a physical");
} else if (age > 20){
  alert("You're probably ready to drink.");
} else {
  alert("Too young!")
}
