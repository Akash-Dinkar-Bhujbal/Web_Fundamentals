function fun() {
  var x = document.getElementById("t1").value;
  var y = document.getElementById("t2").value;

  document.getElementById("p1").innerHTML = "Your name is :" + x;
  document.getElementById("p2").innerHTML = "Your address is:" + y;

  alert("your name is " + x + " your adress is " + y);
}
