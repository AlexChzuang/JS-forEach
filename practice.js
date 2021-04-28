var cars = ["BMW", "Volvo", "Saab", "Ford", "Fiat", "Audi"];
var text = "";
var i;
for (i = 0; i < cars.length; i++) {
  text += cars[i] + "<br>";
  // console.log(text)
}
var text = ''
cars.forEach(function(car) {
  text += car + "<br>";
  console.log( text )
})
