const carrito = [];

// Definir un producto
const producto = {
  nombre: "Monitor 32 Pulgadas",
  precio: 400,
};

const producto2 = {
  nombre: "Celular",
  precio: 800,
};

// Agregar elemento al final del array
carrito.push(producto2);
carrito.push(producto);

const producto3 = {
  nombre: "Teclado",
  precio: 50,
};

// Agregar elementos al inicio del array
carrito.unshift(producto3);

console.table(carrito);
