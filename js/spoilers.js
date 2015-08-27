function revelarSpoiler(){
	$(".spoiler").each(function () {
		$(this).css({"visibility":"visible","display":"block"});
		$(this).animate({opacity:1});  
	});
	$("#advertencia").hide();
	$("#advertenciaSpoiler").css({"visibility":"visible","display":"inline"});
}

function ocultarSpoiler(){
	$(".spoiler").each(function () {
		$(this).css({"visibility":"hidden","display":"none"});
		$(this).animate({opacity:1});  
	});
	$("#advertenciaSpoiler").hide();
	$("#advertencia").css({"visibility":"visible","display":"inline"});
}
