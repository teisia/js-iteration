function print() {
$("#results").empty();
names.forEach(function(e, i) {
  var nameList = e.split("\n");
  for (var i = 0; i < nameList.length; i++) {
  $("#results").append("<li>"+nameList[i]+"</li>" + "\n");
  }
})
}
