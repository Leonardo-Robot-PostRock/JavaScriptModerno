"use strict";

const producto = {
  nombre: "Monitor 20 Pulgadas",
  precio: 300,
  disponible: true,
};

Object.seal(producto);

producto.disponible = false;
// producto.imagen = "imagen.jpg";

// delete producto.precio;

console.log(producto);
console.log(Object.isFrozen(producto));

//La diferencia con Object.freeze() es que este método permite modificar valores de las llaves existentes pero no agregar nuevas llaves y eliminar las llaves del objeto.

console.log(Object.isSealed(producto));
