const navegacion = document.querySelector(".navegacion");

console.log(navegacion.firstElementChild);
console.log(navegacion.lastElementChild);

// console.log(navegacion.childNodes); // Los elementos espacios en blancos son considerados elementos
// console.log(navegacion.children); // Lista elementos reales

// console.log(navegacion.children[1].nodeName);
// console.log(navegacion.children[1].nodeType);

const card = document.querySelector(".card");
// console.log(card.children);
// card.children[1].children[1].textContent =
//   "Nuevo heading desde traversing the home";

// card.children[0].src = "img/hacer3.jpg";
// console.log(card.children[0]);

// Traversing del hijo al padre------------------------

// console.log(card.parentNode);
// console.log(card.parentElement.parentElement.parentElement); // Elementos validos en el html

// Recorrer desde elementos hermanos------------------------

// console.log(card);
// console.log(card.nextElementSibling);
// console.log(card.nextElementSibling.nextElementSibling);

// const ultimoCard = document.querySelector(".card:nth-child(4)");
// console.log(ultimoCard.previousElementSibling);
