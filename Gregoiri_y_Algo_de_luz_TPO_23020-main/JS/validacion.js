
const formulario = document.getElementById('formulario');
const inputs = document.querySelectorAll('#formulario input');


const expresiones = {  
    nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
    apellido: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
    telefono: /^\d{7,14}$/ // 7 a 14 numeros.

}
const campos = {
	nombre: false,
    apellido: false,
	telefono: false
}
const validarFormulario = (e) => {
    switch (e.target.name){
        case "nombre":
            validarCampo(expresiones.nombre, e.target,'nombre');
        break;
        case "apellido":
            validarCampo(expresiones.apellido,e.target, 'apellido');
        break;
        case "telefono":
            validarCampo(expresiones.telefono, e.target, 'telefono');
        break;
    }

}
const validarCampo = (expresion, input, campo) => {
	if(expresion.test(input.value)){
		document.getElementById(`gr${campo}`).classList.remove('fgr-incorrecto');
		document.getElementById(`gr${campo}`).classList.add('fgr-correcto');
		document.querySelector(`#gr${campo} i`).classList.add('fa-check-circle');
		document.querySelector(`#gr${campo} i`).classList.remove('fa-times-circle');
		document.querySelector(`#gr${campo} .finput-error`).classList.remove('finput-error-activo');
		campos[campo] = true;
	} else {
		document.getElementById(`gr${campo}`).classList.add('fgr-incorrecto');
		document.getElementById(`gr${campo}`).classList.remove('fgr-correcto');
		document.querySelector(`#gr${campo} i`).classList.add('fa-times-circle');
		document.querySelector(`#gr${campo} i`).classList.remove('fa-check-circle');
		document.querySelector(`#gr${campo} .finput-error`).classList.add('finput-error-activo');
		campos[campo] = false;
	}
}
inputs.forEach((input) => {
	input.addEventListener('keyup', validarFormulario);
	input.addEventListener('blur', validarFormulario);
});

formulario.addEventListener('submit', (e) => {
	e.preventDefault();
});