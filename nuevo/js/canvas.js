var can = document.querySelector("lienzo");
var canvas =can.getcontext("2d");


canvas.beginPath();
canvas.moveTo(0,0);
canvas.leneTo(100,100);
canvas.stroke();

canvas.fillStyle='rgba(0,0,255,6)':
canvas.fill();