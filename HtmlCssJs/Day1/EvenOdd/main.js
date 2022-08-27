document.getElementById("button1").addEventListener("click", fun);
function fun() {
  var x = document.getElementById("t1").value;
  var c = parseInt(x);

  if (c % 2 == 0) document.getElementById("p1").innerHTML = x + " Is Even";
  else document.getElementById("p1").innerHTML = c + " Is Odd";
}
