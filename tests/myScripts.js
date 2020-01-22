var i;
for (var i = 0; i < 8; i++) {
  document.write("For Loop: ")
  var answer= Math.random(2, i);
  document.write(answer + "<br />");
}

var ind = 0
while(ind < 8)
  {
    var answer= Math.sqrt(ind);
    document.write(answer + "<br />");
    ind++;
  }
function myLoop(){
var end = document.getElementById("end").value;
for(var i = 0; i <= end; i++)
  {
    document.write('<p>' + i + '</p>');
  }
}

function myLoop2(){
var start = document.getElementById("start").value;
for(var i = start; i <= end; i++)
  {
    document.write('<p>' + i + '</p>');
  }
}
