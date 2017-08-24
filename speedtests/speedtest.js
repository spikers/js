// First Speed Test:
// Array.prototype.splice vs Array.prototype.shift vs Array.prototype.pop
var arr = [];
var startingTime;
var elapsedTime;
var quantity = 100000;
var erases = 90000;

// generateRandomArray(arr, quantity);
// startingTime = window.performance.now();
// arr.splice(0, erases);
// elapsedTime = window.performance.now() - startingTime;
// console.log('Splice ' + erases + ' Entries: ', startingTime);

// generateRandomArray(arr, quantity);
// startingTime = window.performance.now();
// for (var shift = 0; shift < erases; shift++) {
//   arr.shift();
// }
// elapsedTime = window.performance.now() - startingTime;
// console.log('Shift ' + erases + ' Entries: ', startingTime);

generateRandomArray(arr, quantity);
startingTime = window.performance.now();
for (var pop = 0; pop < erases; pop++) {
  arr.pop();
}
elapsedTime = window.performance.now() - startingTime;
console.log('Pop ' + erases + ' Entries: ', startingTime);


function generateRandomArray(arr, quantity) {
  for (var i = 0; i < quantity; i++) {
    arr.push(Math.random());
  }
}