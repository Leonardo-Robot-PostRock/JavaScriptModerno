const autenticado = false;
const puedePagar = false;

// Operador ternario e if anidado
console.log(
  autenticado
    ? puedePagar
      ? "Sí esta autenticado y puede pagar"
      : "Sí autenticado, pero no puede pagar"
    : "No, no esta autenticado"
);

// const efectivo = 800;
// const credito = 400;
// const disponible = efectivo + credito;
// const totalPagar = 600;

// if anidado

// if (efectivo > totalPagar || credito > totalPagar || disponible > totalPagar) {
//   if (efectivo > totalPagar) {
//     console.log("Sí pagaste con efectivo");
//   } else {
//     console.log("Otra forma de pago");
//   }
// } else {
//   console.log("Fondos Insuficientes");
// }
