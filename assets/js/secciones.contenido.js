function mostrarElementosDemonSlayer() {
  const anchoPantalla = window.innerWidth;

  let elementosMostrados = 6; // Cantidad de elementos a mostrar por defecto

  if (anchoPantalla <= 768) {
    elementosMostrados = 4; // Cambiar a 4 elementos para pantallas más pequeñas
  }

  if (anchoPantalla <= 414) {
    elementosMostrados = 2; // Cambiar a 2 elementos para pantallas más pequeñas
  }

  const galeriaContenido = document.getElementById("contenido_demonslayer");
  const galeriaArticulos =
    galeriaContenido.getElementsByClassName("galeria_articulos");

  for (let i = 0; i < galeriaArticulos.length; i++) {
    if (i < elementosMostrados) {
      galeriaArticulos[i].style.display = "flex";
    } else {
      galeriaArticulos[i].style.display = "none";
    }
  }
}

mostrarElementosDemonSlayer(); // Llamar a la función cuando se cargue la página
window.addEventListener("resize", mostrarElementosDemonSlayer); // Volver a llamar a la función al cambiar el tamaño de la pantalla

//contenido consolas
function mostrarElementosConsolas() {
  const anchoPantalla = window.innerWidth;

  let elementosMostrados = 6; // Cantidad de elementos a mostrar por defecto

  if (anchoPantalla <= 768) {
    elementosMostrados = 4; // Cambiar a 4 elementos para pantallas más pequeñas
  }

  if (anchoPantalla <= 414) {
    elementosMostrados = 2; // Cambiar a 2 elementos para pantallas más pequeñas
  }

  const galeriaContenido = document.getElementById("contenido_consolas");
  const galeriaArticulos =
    galeriaContenido.getElementsByClassName("galeria_articulos");

  for (let i = 0; i < galeriaArticulos.length; i++) {
    if (i < elementosMostrados) {
      galeriaArticulos[i].style.display = "flex";
    } else {
      galeriaArticulos[i].style.display = "none";
    }
  }
}

mostrarElementosConsolas(); // Llamar a la función cuando se cargue la página
window.addEventListener("resize", mostrarElementosConsolas); // Volver a llamar a la función al cambiar el tamaño de la pantalla

//contenido diversos
function mostrarElementosDiversos() {
  const anchoPantalla = window.innerWidth;

  let elementosMostrados = 6; // Cantidad de elementos a mostrar por defecto

  if (anchoPantalla <= 768) {
    elementosMostrados = 4; // Cambiar a 4 elementos para pantallas más pequeñas
  }

  if (anchoPantalla <= 414) {
    elementosMostrados = 2; // Cambiar a 2 elementos para pantallas más pequeñas
  }

  const galeriaContenido = document.getElementById("contenido_diversos");
  const galeriaArticulos =
    galeriaContenido.getElementsByClassName("galeria_articulos");

  for (let i = 0; i < galeriaArticulos.length; i++) {
    if (i < elementosMostrados) {
      galeriaArticulos[i].style.display = "flex";
    } else {
      galeriaArticulos[i].style.display = "none";
    }
  }
}

mostrarElementosDiversos(); // Llamar a la función cuando se cargue la página
window.addEventListener("resize", mostrarElementosDiversos); // Volver a llamar a la función al cambiar el tamaño de la pantalla
