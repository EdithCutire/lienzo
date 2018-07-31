var contenedor = document.querySelector("#contenedor");
var lienzo = document.querySelector("#lienzo");
var btnclip = document.querySelector("#btnclip");
var input = document.querySelector("#input");

function ampliar(){
	contenedor.style.width="100%";
	contenedor.style.height="100vh";
	contenedor.style.margin="0";

	lienzo.style.width="100%";
	lienzo.style.height="100vh";
	lienzo.style.backgroundSize="cover";
	lienzo.style.backgroundRepeat="no-repeat";

	btnclip.innertHTML="REDUCIR ZOOO";
	btnclip.style.position="fixed";
	btnclip.style.top="10px";
	btnclip.style.left="10px";
	btnclip.style.zIndex="1";

	btnclip.setAttribute("onclick","reducir()")
}
function reducir(){
	contenedor.style.width="1000px";
	contenedor.style.height="500px";
	contenedor.style.margin="5vh auto";

	lienzo.style.width="1000px";
	lienzo.style.height="500px";

	btnclip.innertHTML="Ampliar Zooo";
	btnclip.style.position="relative";
	btnclip.style.top="0";
	btnclip.style.left="0";
	btnclip.style.zIndex="0";

	btnclip.setAttribute("onclick","ampliar()")
}