// Con esta linea llamamos al canvas con id lienzo//
var canvas = document.querySelector("#lienzo");
//Instanciamos el canvas//
var ctx = canvas.getContext('2d');

//Creamos el objeto//
var imagenPNG= new Image();
//Lamamamos los atributos de la clase padre "Image" el atributo src
imagenPNG.src ="img/ejemploPNG.png";
imagenPNG.onload=function(){
	//ctx.drawimage(image,x1,y1,x2,y2)
	ctx.drawImage(imagenPNG,0,0,100,100);
}
	
//Creamos el objeto//
var imagenJPG = new Image();
//Lamamamos los atributos de la clase padre "Image" el atributo src
imagenJPG.src ="img/ejemploJPG.jpg";
imagenJPG.onload=function(){
//ctx.drawimage(image,x1,y1,x2,y2)
ctx.drawImage(imagenJPG,300,200,100,100);
}

//Creamos el objeto//
var imagenSVG = new Image();
//Lamamamos los atributos de la clase padre "Image" el atributo src
imagenSVG.src ="img/ejemploSVG.svg";
imagenSVG.onload=function(){
	//ctx.drawimage(image,x1,y1,x2,y2)
	ctx.drawImage(imagenSVG,400,300,100,100);
}

	