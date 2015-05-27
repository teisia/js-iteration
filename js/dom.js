/*

Hints for the first problem:

  1. Find the button with the ID of `sum-all`
  2. Add an event listener that:
    - finds the select element by name (use getElementsByName)
    - passes all of its options to the `sum` function defined in `logic.js`
    - takes the value returned by the `sum` function and displays it on the page

*/
var div = document.getElementById("results");
var countSelected = document.getElementById("count-selected");
var sumAll = document.getElementById("sum-all");
var sumSelected = document.getElementById("sum-selected");
var prices = document.getElementsByName("prices")[0];

sumAll.addEventListener("click", function() {
  div.innerHTML = getSum(prices.options);
});

countSelected.addEventListener("click", function() {
  div.innerHTML = prices.selectedOptions.length;
});

sumSelected.addEventListener("click", function() {
  div.innerHTML = getSum(prices.selectedOptions);
});
