const encabezado = document.querySelector(".contenido-hero h1").textContent;
console.log(encabezado);

//Si en el CSS - visibility: hidden; no lo va a encontrar
// console.log(encabezado.innerText);
//Si lo va encontrar
// console.log(encabezado.textContent);
//Trae el html
// console.log(encabezado.innerHTML);

// const nuevoHeading = "Nuevo Heading";
// document.querySelector(".contenido-hero h1").textContent = nuevoHeading;

const image = document.querySelector(".card img");
image.src = "img/hacer2.jpg";
