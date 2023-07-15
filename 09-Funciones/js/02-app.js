// Hosting:
// 1 Etapa de creación
// 2 Etapa de ejecución

//Diferencias entre las 2 funciones:

//Declaración de función (Function Declaration)

sumar();
function sumar() {
  console.log(2 + 2);
}

// output: 4

//Expresión de Función (Function Expression)
sumar2();
const sumar2 = function () {
  console.log(3 + 3);
};

//No puede ejecutarse o ser accesida la función antes de ser inicializada
// output: 02-app.js:15 Uncaught ReferenceError: Cannot access 'sumar2' before initialization
// at 02-app.js:15:1
