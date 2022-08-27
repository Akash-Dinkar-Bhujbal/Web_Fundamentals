document.getElementById("button1").addEventListener("click", fun);
function fun() {
  var x = document.getElementById("t1").value;
  var y = document.getElementById("t2").value;

  var c = parseInt(x);
  var d = parseInt(y);
  var e = c + d;

  document.getElementById("p1").innerHTML = "Sum is: " + e;

}
