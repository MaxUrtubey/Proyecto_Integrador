// Acceso
function fnCancelar() {
	const user = document.getElementById('usuario');
	user.value = "";
	const pass = document.getElementById('contraseña');
	pass.value = "";
}
function fnValidar() {
	const user = document.getElementById('usuario');
	const pass = document.getElementById('contraseña');
	if (user.value == 'Max' & pass.value == '1234') {
		alert(`Bienvenido: ${user.value}`);
	} else {
		alert('Usuario y/o Contraseña incorrectos')
	}
}