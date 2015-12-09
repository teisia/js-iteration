
var sumAll = document.getElementById("sum-all");
var avgAll = document.getElementById("average-all");
var countSelected = document.getElementById("count-selected");
var sumSelected = document.getElementById("sum-selected");
var prices = document.getElementsByClassName("all-prices")[0].options;
var results = document.getElementById("results");

sumAll.addEventListener("click", function() {
  results.innerHTML = "$" + sum(prices);
})

avgAll.addEventListener("click", function() {
  results.innerHTML = "$" + avg(prices);
})

countSelected.addEventListener("click", function() {
  results.innerHTML = getCount(prices);
})

sumSelected.addEventListener("click", function() {
  results.innerHTML = "$" + getSelectedSum(prices);
})
