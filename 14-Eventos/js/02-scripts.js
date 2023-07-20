const nav = document.querySelector(".navegacion");

// registrar un evento
// nav.addEventListener("click", () => {
//   console.log("click en nav");
// });

nav.addEventListener("mouseout", () => {
  console.log("saliendo de la navegacion");
  nav.style.backgroundColor = "transparent";
});

// nav.addEventListener("mouseenter", () => {
//   console.log("Entrando en la navegación");
//   nav.style.backgroundColor = "white";
// });

// nav.addEventListener("mousedown", () => {
//   console.log("Entrando en la navegación");
//   nav.style.backgroundColor = "white";
// });

// nav.addEventListener("mouseup", () => {
//   console.log("Entrando en la navegación");
//   nav.style.backgroundColor = "white";
// });

nav.addEventListener("dblclick", () => {
  console.log("Entrando en la navegación");
  nav.style.backgroundColor = "white";
});

// mousedown - similar al click
//  click
// dblclick - doble click
// mouseup - cuando sueltas el mouse
