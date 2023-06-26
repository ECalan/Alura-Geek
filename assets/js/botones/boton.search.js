export function encontrado(gatilloLink, image) {
  // Obtener el elemento de entrada de búsqueda y la lista de elementos de galería
  const input = document.getElementById("boton_search");
  const galeria = document.getElementsByClassName("galeria_producto");

  // evento de escucha al elemento de entrada de búsqueda
  input.addEventListener("change", () => {
    const searchTerm = input.value.toLowerCase();

    // Buscar coincidencias parciales en el contenido de los elementos de galería
    let mejorCoincidencia = null;
    let mejorPuntaje = Infinity;

    for (let i = 0; i < galeria.length; i++) {
      const contenido = galeria[i].textContent.toLowerCase();

      if (contenido.includes(searchTerm)) {
        const puntaje = Math.abs(contenido.length - searchTerm.length);

        if (puntaje < mejorPuntaje) {
          mejorPuntaje = puntaje;
          mejorCoincidencia = galeria[i];
        }
      }
    }

    // Mostrar la mejor coincidencia
    if (mejorCoincidencia) {
      // acción deseada con la coincidencia encontrada
      const input = document.querySelector("#boton_search").value;

      if (input == 0) {
        document.querySelector("#boton_search").value = "";
      } else if (mejorCoincidencia.textContent === image.name_product) {
        //console.log("Mejor coincidencia: " + mejorCoincidencia.textContent);

        gatilloLink.click();

        const displayActual = document.querySelector(".header_busqueda_icono2");
        const estiloComputado = window.getComputedStyle(displayActual);
        const valorDisplay = estiloComputado.getPropertyValue("display");

        if (valorDisplay == "flex") {
          document.querySelector(".header_container_logo").style.display =
            "block";
          document.querySelector("#loginup").style.display = "block";
          document.querySelector(".header_barra_busqueda").style.display =
            "none";
        }

        setTimeout(() => {
          document.querySelector("#boton_search").value = "";
        }, 1200);
      }
    }
  });
}

const botonBusqueda = document.querySelector(".header_busqueda_icono2");

botonBusqueda.addEventListener("click", () => {
  console.log("buscar");

  document.querySelector(".header_container_logo").style.display = "none";
  document.querySelector("#loginup").style.display = "none";
  document.querySelector(".header_barra_busqueda").style.display = "block";
});
