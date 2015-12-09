
function sum(prices) {
  var sum = 0;
  for (var i = 0; i < prices.length; i++) {
  sum += parseFloat(prices[i].value);
}
  return sum.toFixed(2);
}

function avg(prices) {
  var average = sum(prices) / prices.length;
  return average.toFixed(2);
}

function getCount(prices) {
  var count = 0;
  for (var i = 0; i < prices.length; i++) {
    if (prices[i].selected) {
      count++
    }
  }
  return count;
}
