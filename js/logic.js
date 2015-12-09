/*

Hints for the first problem:

1. Define a function that:
- is assigned to a variable named `sum`
- has one parameter named `options`
- returns the calculated sum of all of the values of all of the options passed in

NOTE: you can use a `for` loop to make this happen.

*/

function sum(prices) {
  var sum = 0;
  for (var i = 0; i < prices.length; i++) {
  sum += parseFloat(prices[i].value);
}
  return sum.toFixed(2);
}
