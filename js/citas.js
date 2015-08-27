function cargar() {
	setInterval(cambiarCita,10000);
	numAnterior =-10;
	cambiarCita();
}
function cambiarCita() {
	var citas = new Array(
		"Por primera vez se dio cuenta de que la mejor manera de ocultar un secreto es ante todo ocultárselo a uno mismo.",
		"<span class='respuesta'>-Winston, ¿cómo afirma un hombre su poder sobre otro?.</span><br>Winston pensó un poco y respondió:<br><span class='respuesta'>-Haciéndole sufrir</span>",
		"No habrá risa; no habrá arte; ni literatura ni ciencia; sólo habrá ambición de poder, cada día de una manera más sutil",
		"Quien controla el presente controla el pasado y quien controla el pasado controlará el futuro",
		"El pasado es únicamente lo que digan los testimonios escritos y la memoria humana",
		"La guerra es la paz. La libertad es la esclavitud. La ignorancia es la fuerza",
		"Si se les permite entrar en relación con extranjeros, descubrirían que son criaturas iguales a ellos en lo esencial y que todo lo que se ha dicho sobre ellos es mentira",
		"No se establece una dictadura para salvaguardar una revolución; se hace la revolución para establecer una dictadura",
		"Por primera vez se dio cuenta de que la mejor manera de ocultar un secreto es ante todo ocultárselo a uno mismo",
		"Si todos disfrutasen por igual del lujo y del ocio, la gran masa de seres humanos, a quienes la pobreza suele imbecilizar, aprenderían muchas cosas y empezarían a pensar por sí mismos",
		"Si los hechos demuestran otra cosa, habrá que cambiar los hechos",
		"Si la riqueza llegara a generalizarse, no serviría para poder distinguir a nadie",
		"Los mejores libros son los que nos dicen lo que ya sabemos"
		);	
	var elemento = document.getElementById('textoCita');
	var numAleatorio = Math.floor(Math.random() * (citas.length-1)) + 1;	
	while (numAleatorio===numAnterior) {
			numAleatorio = Math.floor(Math.random() * (citas.length-1)) + 1;
	}
	numAnterior = numAleatorio;
	$('#textoCita').find("span")
	.animate({opacity:0})
	.queue(function(){
		$(this).html(citas[numAleatorio])
		.dequeue()
	})
	.animate({opacity:1});  
}

