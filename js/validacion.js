function validar() {
	var campo = document.	getElementById('edad');
	if (isNaN(campo.value)) {
		alert('Introduce un número en la edad');
		return false;
	} else {
		return true;
	}
}

