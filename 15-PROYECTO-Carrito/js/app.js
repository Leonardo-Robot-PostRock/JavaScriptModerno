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
	const cursoSeleccionado = e.target.parentElement.parentElement;
	if (e.target.classList.contains('agregar-carrito')) {
		leerDatosCursos(cursoSeleccionado);
	}
}

//Leer el contenido del HTML al que le dimos click y extrae la información del curso
function leerDatosCursos(curso) {
	// console.log(curso);

	//Crear un objeto con el contenido del curso actual
	const infoCurso = {
		imagen: curso.querySelector('img').src,
		titulo: curso.querySelector('h4').textContent,
		nombre: curso.querySelector('p').textContent,
		precio: curso.querySelector('.precio > span').textContent,
		id: curso.querySelector('a').getAttribute('data-id'),
		cantidad: 1,
	};

	console.log(infoCurso);
}
