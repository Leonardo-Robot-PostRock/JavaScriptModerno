const carrito = [
  { nombre: "Monitor 27 Pulgadas", precio: 500 },
  { nombre: "Televisión", precio: 100 },
  { nombre: "Tablet", precio: 100 },
  { nombre: "Audifonos", precio: 300 },
  { nombre: "Teclado", precio: 400 },
  { nombre: "Celular", precio: 700 },
];

// con un foreach
let resultado = "";
carrito.forEach((producto, index) => {
  if (producto.nombre === "Tablet") {
    resultado = carrito[index];
  }
});

console.log(resultado);

// con un find
const resultado2 = carrito.find((producto) => producto.precio === 100);

console.log(resultado2);
//A diferencia de filter, find solo retorna el primer elemento que cumpla la condición. Mientras que filter retorna a todos los elementos que cumplen con la condición.
