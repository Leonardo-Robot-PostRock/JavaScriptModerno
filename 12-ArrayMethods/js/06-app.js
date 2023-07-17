const carrito = [
  { nombre: "Monitor 27 Pulgadas", precio: 500 },
  { nombre: "Televisión", precio: 100 },
  { nombre: "Tablet", precio: 100 },
  { nombre: "Audifonos", precio: 300 },
  { nombre: "Teclado", precio: 400 },
  { nombre: "Celular", precio: 700 },
];

// En .every todos deben cumplir la condición
const resultado = carrito.every((producto) => producto.precio < 500);
console.log(resultado);

// En .some almenos un elemento debe cumplir la condición
const resultado2 = carrito.some((producto) => producto.precio < 500);
console.log(resultado2);
