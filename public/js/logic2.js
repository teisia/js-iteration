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

function printLast() {
  $("#results").empty();
  names.forEach(function(e, i) {
    var nameList = e.split("\n");
    var more = "";
    for (var i = 0; i < nameList.length; i++) {
      var split = nameList[i].split(" ");
      if (split[2] === undefined) {
        more = "";
        $("#results").append("<li>" + split[1] + "</li>" + "\n")
      } else {
        more = split[2];
        $("#results").append("<li>" + split[1] + " " + more + "</li>" + "\n")
      }
    }
  })
}
