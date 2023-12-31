const pendientes = ["Tarea", "Comer", "Proyecto", "Estudiar JavaScript"];

const carrito = [
  {
    nombre: "Monitor 27 Pulgadas",
    precio: 500,
  },
  {
    nombre: "Televisión",
    precio: 100,
  },
  {
    nombre: "Tablet",
    precio: 200,
  },
  {
    nombre: "Audifonos",
    precio: 300,
  },
  {
    nombre: "Teclado",
    precio: 400,
  },
  {
    nombre: "Celular",
    precio: 700,
  },
];

// for of
for (let pendiente of pendientes) {
  console.log(pendiente);
}

console.log("-".repeat(10));

for (let producto of carrito) {
  console.log(producto.nombre);
}
