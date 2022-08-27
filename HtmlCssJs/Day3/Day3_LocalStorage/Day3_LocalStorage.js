document.getElementById("button1").addEventListener("click",fun1)
document.getElementById("button2").addEventListener("click",fun2)
var l = localStorage;
function fun1(){
    // l.setItem("name","Maya")
    // l.setItem("address","Thane")
    var a = document.getElementById("t1").value;
    var b = document.getElementById("t2").value;

    l.setItem("name",a);
    l.setItem("address",b);
}
function fun2(){
    alert(" name is "+l.getItem("name"));
    alert(" address is "+l.getItem("address"));
}   