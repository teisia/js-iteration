
var sumAll = document.getElementById("sum-all");
var prices = document.getElementsByClassName("all-prices")[0].options;
var results = document.getElementById("results");

sumAll.addEventListener("click", function() {
  results.innerHTML = "$" + sum(prices);
})
