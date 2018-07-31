var frame = window.requestdAnimationFrame||
            window.mozRequedAnimationFrame||
            window.webkitRequestAnimationFrame||
            window.msRequesAnimationFrame;
var canvas = document.querySelector("#lienzo");
var ctx = canvas.getContext("2d");
//objeto 1

var objeto2 =new Object({
//Propiedaddes o caracteristicas del objeto
	color: "blue",
	iniciox: 100,
	inicioy: 100,
	ancho: 50,
	alto: 85,
/* // funciones o metodos del objeto
	lanzador: function(){
		ancho:10;
	}*/
});
var objeto3 = {
//Propiedaddes o caracteristicas del objeto
	color: "yellow",
	iniciox: 50,
	inicioy: 50,
	ancho: 5,
	alto: 5,
 /*// funciones o metodos del objeto
	lanzador: function(){
		ancho:10;
	}*/
}
var objeto4= {
	//Propiedaddes o caracteristicas del objeto
	color: "white",
	iniciox: 150,
	inicioy: 150,
	ancho: 15,
	alto: 15,
 /*// funciones o metodos del objeto
	lanzador: function(){
		ancho:10;
	}*/
}
ctx.fillStyle = objeto2.color;
//ctx.fillRect(x,y,x1,y1);
ctx.fillRect(objeto2.iniciox,objeto2.inicioy,objeto2.ancho,objeto2.alto);

ctx.fillStyle = objeto3.color;
//ctx.fillRect(x,y,x1,y1);
ctx.fillRect(objeto3.iniciox,objeto3.inicioy,objeto3.ancho,objeto3.alto);

ctx.fillStyle = objeto4.color;
//ctx.fillRect(x,y,x1,y1);
ctx.fillRect(objeto4.iniciox,objeto4.inicioy,objeto4.ancho,objeto4.alto);