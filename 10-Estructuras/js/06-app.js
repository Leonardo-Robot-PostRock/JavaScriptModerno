const usuario = false;
const puedePagar = false;

if (usuario && puedePagar) {
  console.log("Sí, sí puedes comprar");
} else if (!puedePagar && !usuario) {
  console.log("No, no puedes compra");
} else if (!usuario) {
  console.log("Inicia sesión o saca una cuenta");
} else if (!puedePagar) {
  console.log("Fondos Insuficientes");
}
