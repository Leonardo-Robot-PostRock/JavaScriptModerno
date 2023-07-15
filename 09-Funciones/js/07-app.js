inciarApp();

function inciarApp() {
  console.log("Iniciando app...");
  segundaFuncion();
}

function segundaFuncion() {
  console.log("Desde la segunda función");
  usuarioAutenticado("Leonardo");
}

function usuarioAutenticado(usuario) {
  console.log("Autenticando usuario... espere...");
  console.log(`Usuario autenticado exitosamente: ${usuario}`);
}
