var x;
var fs = require('fs');
var data = fs.readFileSync('inventory.json');

var obj = JSON.parse(data);
console.log(obj.rice);
console.log(obj.pulses);
console.log(obj.wheat);
console.log('\n');
for (var i = 0; i < obj.rice.length; i++) {
  var obj1 = obj.rice[i];

  console.log(`price of type${i} rice= Rs. ` + (obj1.weight) * (obj1.price));
}
console.log('----------------------------\n');

for (var i = 0; i < obj.pulses.length; i++) {
  var obj1 = obj.pulses[i];

  console.log(`price of type${i} pulse= Rs. ` + (obj1.weight) * (obj1.price));
}
console.log('----------------------------\n');

for (var i = 0; i < obj.wheat.length; i++) {
  var obj1 = obj.wheat[i];

  console.log(`price of type${i} wheat= Rs. ` + (obj1.weight) * (obj1.price));
} console.log('\n');