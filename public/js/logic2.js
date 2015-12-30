function printNames() {
  $("#results").empty();
  names.forEach(function(e, i) {
    var nameList = e.split("\n");
    for (var i = 0; i < nameList.length; i++) {
      $("#results").append("<li>" + nameList[i] + "</li>" + "\n");
    }
  })
}

function printFirst() {
  $("#results").empty();
  names.forEach(function(e, i) {
      var nameList = e.split("\n");
      for (var i = 0; i < nameList.length; i++) {
        var split = nameList[i].split(" ");
        $("#results").append("<li>" + split[0] + "</li" + "\n");
        }
      })
  }
