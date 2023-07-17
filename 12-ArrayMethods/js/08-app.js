const meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio"];

const carrito = [
  { nombre: "Monitor 27 Pulgadas", precio: 500 },
  { nombre: "Televisión", precio: 100 },
  { nombre: "Tablet", precio: 200 },
  { nombre: "Audifonos", precio: 300 },
  { nombre: "Teclado", precio: 400 },
  { nombre: "Celular", precio: 700 },
];

// Modifica al arreglo original
// meses.push("Agosto");
// console.log(meses);

// No modifica al arreglo original
const meses2 = [...meses, "Agosto"];
console.log(meses2);

const producto = { nombre: "Disco Duro", precio: 300 };

// Importante: no se puede poner spread operator a un objeto
// const carrito2 = [...carrito, ...producto]; // Dará error
const carrito2 = [...carrito, producto];

console.log(carrito2);
