var c = document.getElementById("orbitaMercurio");

c.style.index = "1";
var ctx = c.getContext("2d");
ctx.style.border = "2px solid white";
ctx.fillStyle = "white";
ctx.arc(45%,20%,0,0,true);
ctx.fill();
