//Configurar extensiones en animacion
var frame = window.requestAnimationFrame||
			window.mozRequedAnimationFrame||
			window.webkitRequestAnimationFrame||
			window.msRequesAnimationFrame;
var canvas = document.querySelector("#lienzo");
var ctx =canvas.getContext('2d');
/*
var sprite= new Image();
sprite.src = "img/opcion1.png";

var numerowidth=0;
var ubicacionx=0;

function movimiento(){
if (numerowidth>=600) {numerowidth=0;}else{ numerowidth+=10;}
	for (var i = 0; i <= numerowidth; i+=100) {
		if (numerowidth>=i) {ubicacionx=i;}
}
ctx.clearRect(0,0,canvas.width,canvas.height);
ctx.drawImage(sprite,ubicacionx,0,100,100,0,100,100,100);
frame(movimiento);
//ctx.draw(imagen,x1,y1,recortex,recortey,x2,y2)
}
movimiento();*/



var sprite2 = new Image();
sprite2.src = "img/opcion2.png";

var numeroo2 = 0;
var ubicacionxo2 = 0;

function movimientoopcion2(){
if (numeroo2>=330) {numeroo2=0;}else{ numeroo2+=10;}
	for (var i = 0; i <= numeroo2; i+=55) {
		if (numeroo2>=i) {ubicacionxo2=i;}
}
ctx.clearRect(0,100,canvas.width,canvas.height);
//ctx.draw(imagen,x1,y1,recortex,recortey,x2,y2)
ctx.drawImage(sprite2,ubicacionxo2,100,55,55,200,200,55,55);
frame(movimientoopcion2);
}

movimientoopcion2();


/*
var sprite3=new Image();
sprite3.src= "img/opcion3.png";

var numeroo3=0;
var ubicacionxo3=0;
function movimientoopcion3(){
if (numeroo3>=918) {numeroo3=0;}else{ numeroo3+=10;}
	for (var i = 0; i <=numeroo3; i+=153) {
		if (numeroo3>=i) {ubicacionxo3=i;}
}
//Clear es por defecto para borrar la imagen
ctx.clearRect(0,0,canvas.width,canvas.height);
//recorta la imagen
ctx.drawImage(sprite3,ubicacionxo3,0,153,141,100,300,153,200);
//Lo ejecuta el movimiento
frame(movimientoopcion3);
}
//declaramos la funcion para qye se ejecute
movimientoopcion3();*/
