const autenticado = true;

if (autenticado) {
  console.log("El usuario esta autenticado");
}

const puntaje = 450;

// if (puntaje > 400) {
//   console.log("Excelente!!!");
// } else if (puntaje > 300) {
//   console.log("Buen puntaje... felicidades");
// }

function revistarPuntaje() {
  if (puntaje > 400) {
    console.log("Excelente!!!");
    return;
  }

  if (puntaje > 300) {
    console.log("Buen puntaje... felicidades");
    return;
  }
}

revistarPuntaje();
