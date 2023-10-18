//Variables
const carrito = document.querySelector('#carrito');
const contenedorCarrito = document.querySelector('#lista-carrito tbody');
const vaciarCarritoBtn = document.querySelector('#vaciar-carrito');
const listaCurso = document.querySelector('#lista-cursos');

cargarEvenListener();
function cargarEvenListener() {
	//Cuando agregas un curso presionando "Agregar al Carrito"
	listaCurso.addEventListener('click', agregarCurso);
}

//Funciones
function agregarCurso(e) {
	e.preventDefault();
	if (e.target.classList.contains('agregar-carrito')) {
		console.log(e.target);
	}
}
