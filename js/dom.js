
var sumAll = document.getElementById("sum-all");
var avgAll = document.getElementById("average-all");
var prices = document.getElementsByClassName("all-prices")[0].options;
var results = document.getElementById("results");

sumAll.addEventListener("click", function() {
  results.innerHTML = "$" + sum(prices);
})

avgAll.addEventListener("click", function() {
  alert("meep");
})
