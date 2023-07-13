const producto = "Monitor 20 Pulgadas";

// .replace para reemplazar
console.log(producto);
console.log(producto.replace(" Pulgadas", '"'));
console.log(producto.replace("Monitor", "Monitor Curvo"));

// .slice para cortar
console.log(producto.slice(0, 10));
console.log(producto.slice(0, 7));
// Si el primer número es mayor al segundo no hará nada
console.log(producto.slice(2, 1));

// Alternativa a slice
console.log(producto.substring(2, 1));
// La diferencia entre el método slice y substring es que substring da vuelta los valores pasados como argumentos cuando el primer valor es mayor al segundo

const usuario = "Leonardo";
console.log(usuario.substring(0, 1));
console.log(usuario.charAt(0));
