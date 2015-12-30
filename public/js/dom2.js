var printAll = document.getElementById("all-names");
var first = document.getElementById("first-names");
var last = document.getElementById("last-names");
var lengths = document.getElementById("names-with-lengths");
var names = document.querySelector('.all-names').value.split('\n/');

printAll.addEventListener("click", function() {
  printNames();
})

first.addEventListener("click", function() {
  printFirst();
})

last.addEventListener("click", function() {
  printLast();
})
