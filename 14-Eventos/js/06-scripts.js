// Event Bubbling
// El evento se prograpa hacia las clases padres
//con e.stopPropagation evitamos eso
const cardDiv = document.querySelector('.card');
const infoDiv = document.querySelector('.info');
const titulo = document.querySelector('.titulo');

cardDiv.addEventListener('click', (e) => {
	e.stopPropagation();
	console.log('click en card');
});

infoDiv.addEventListener('click', (e) => {
	e.stopPropagation();
	console.log('click en info');
});

titulo.addEventListener('click', (e) => {
	e.stopPropagation();
	console.log('click en titulo');
});
