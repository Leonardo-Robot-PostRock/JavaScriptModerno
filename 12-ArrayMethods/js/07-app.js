const meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio"];
const meses2 = ["Agosto", "Septiembre"];
const meses3 = ["Octubre", "Noviembre", "Diciembre"];

// Tanto en concat y en spread operator importa el orden
// ------------------------------------------------------
// const resultado = meses.concat(meses2, meses3, "Otro mes");
const resultado = meses.concat(meses3, meses2);

console.log(resultado);

// spread operator
// const resultado2 = [...meses, ...meses2, ...meses3];
const resultado2 = [...meses3, ...meses, ...meses2];
console.log(resultado2);
