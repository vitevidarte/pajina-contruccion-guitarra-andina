let regalo = document.getElementById('regalo');

/*************************************/

/*************************************/

// campos del   usuario

let nombre = document.getElementById('nombre');
let apellido = document.getElementById('apellido');
let email = document.getElementById('email');

//  campos de los pases
let pase_dia = document.getElementById('pase_dia');
let pase_dosdias = document.getElementById('pase_dosdias');
let pase_completo = document.getElementById('pase_completo');

//   botones y div
let calcular = document.getElementById('calcular');
let errorDiv = document.getElementById('error');
let botonRegistro = document.getElementById('btnRegistro');
let lista_productos = document.getElementById('lista-productos');
let suma = document.getElementById('suma-total');

// Extras
let camisas = document.getElementById('camisa_evento');
let etiquetas = document.getElementById('etiquetas');

calcular.addEventListener('click', calcularMontos);

pase_dia.addEventListener('blur', mostrarDias);
pase_dosdias.addEventListener('blur', mostrarDias);
pase_completo.addEventListener('blur', mostrarDias);

nombre.addEventListener('blur', Nombre);
apellido.addEventListener('blur', Apellido);
email.addEventListener('blur', Email);

function Nombre() {
	if (this.value == '') {
		errorDiv.style.display = 'block';
		errorDiv.innerHTML = 'Ingrese Nombre';
		this.style.border = ' 1px solid red';
	} else {
		this.style.border = '';
		errorDiv.style.display = 'none';
	}
}

function Apellido() {
	if (this.value == '') {
		errorDiv.style.display = 'block';
		errorDiv.innerHTML = 'Ingrese Apellido';
		this.style.border = ' 1px solid red';
	} else {
		this.style.border = '';
		errorDiv.style.display = 'none';
	}
}
function Email() {
	if (this.value == '') {
		errorDiv.style.display = 'block';
		errorDiv.innerHTML = 'Ingrese Email';
		this.style.border = ' 1px solid red';
	} else if (this.value.indexOf('@') === -1) {
		errorDiv.style.display = 'block';
		errorDiv.innerHTML = 'Email Incorrecto';
		this.style.border = ' 1px solid red';
	} else {
		this.style.border = '';
		errorDiv.style.display = 'none';
	}
}

function calcularMontos(event) {
	event.preventDefault();
	if (regalo.value === '') {
		alert('Selecione Su Regalo');
	} else {
		let boletosDia = pase_dia.value,
			boletos2Dias = pase_dosdias.value,
			boletosCompletos = pase_completo.value,
			cantidadCamisas = camisas.value,
			cantidadEtiquetas = etiquetas.value;

		let totalPagar = boletosDia * 30 + boletos2Dias * 45 + boletosCompletos * 50 + cantidadCamisas * 10 * 0.93 + cantidadEtiquetas * 2;

		let listadoProductos = [];
		if (boletosDia >= 1) {
			listadoProductos.push(boletosDia + ' Pases Por Dia ');
		}
		if (boletos2Dias >= 1) {
			listadoProductos.push(boletos2Dias + ' Pases Por 2 Dias ');
		}
		if (boletosCompletos >= 1) {
			listadoProductos.push(boletosCompletos + ' Pases Completos ');
		}

		// camisas
		if (cantidadCamisas >= 1) {
			listadoProductos.push(cantidadCamisas + ' Camisas ');
		}
		if (cantidadEtiquetas >= 1) {
			listadoProductos.push(cantidadEtiquetas + ' Etiquetas ');
		}
		lista_productos.style.display = 'flex';
		lista_productos.innerHTML = '';

		for (var i = 0; i < listadoProductos.length; i++) {
			lista_productos.innerHTML += listadoProductos[i] + '<br/>';
		}
		suma.innerHTML = 'S/ ' + totalPagar.toFixed(2);
	}
}
// fin de la funcion *****************

function mostrarDias() {
	let boletosDia = pase_dia.value,
		boletos2Dias = pase_dosdias.value,
		boletosCompletos = pase_completo.value;

	let diasElegidos = [];

	if (boletosDia > 0) {
		diasElegidos.push('viernes');
	}
	if (boletos2Dias > 0) {
		diasElegidos.push('viernes', 'sabado');
	}
	if (boletosCompletos > 0) {
		diasElegidos.push('viernes', 'sabado', 'domingo');
	}
	for (var i = 0; i < diasElegidos.length; i++) {
		document.getElementById(diasElegidos[i]).style.display = 'flex';
	}
}
