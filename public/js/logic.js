
function sum(prices) {
  var sum = 0;
  for (var i = 0; i < prices.length; i++) {
  sum += parseFloat(prices[i].value);
}
  return sum.toFixed(2);
}
