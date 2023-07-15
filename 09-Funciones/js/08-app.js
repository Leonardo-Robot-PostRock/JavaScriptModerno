function sumar(a, b) {
  return a + b;
}

// La función sumar asigna el valor de retorno a la variable resultado
const resultado = sumar(2, 3);

console.log(resultado);

// Ejemplo más avanzado
let total = 0;
function agregarCarrito(precio) {
  return (total += precio);
}

function calcularImpuesto(total) {
  return total * 1.15;
}

const totalPagar = calcularImpuesto(total);
total = agregarCarrito(300);
total = agregarCarrito(100);
total = agregarCarrito(600);

console.log(`El total a pagar es de ${totalPagar}`);
console.log(total);
