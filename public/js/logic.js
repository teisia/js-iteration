
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

function getSelectedSum(prices) {
  var total = 0;
  for (var i = 0; i < prices.length; i++) {
    if (prices[i].selected) {
      total += parseFloat(prices[i].value);
    }
  }
  return total.toFixed(2);
}
