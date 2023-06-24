import {
  ref,
  onValue,
} from "https://www.gstatic.com/firebasejs/9.22.0/firebase-database.js";
import { database } from "../firebase.js";
import { encontrado } from "./boton.search.js";
import { comprasIndividual } from "./boton.comprar.js";
import { showMessage } from "./show.message.js";

let currentImageContainer = null;

function downloadImage() {
  try {
    const imagesInfo = ref(database, "Productos");

    onValue(
      imagesInfo,
      (snapshot) => {
        const data = snapshot.val();

        for (const key in data) {
          if (key == "consolas") {
            var contenedor = "contenido_consolas";
          } else if (key == "demonSlayer") {
            var contenedor = "contenido_demonslayer";
          } else if (key == "diversos") {
            var contenedor = "contenido_diversos";
          }

          if (Object.hasOwnProperty.call(data, key)) {
            const sections = data[key];

            for (const element in sections) {
              const idLink = `link-${Math.random().toString(32).substring(7)}`;

              if (Object.hasOwnProperty.call(sections, element)) {
                const image = sections[element];

                const containerProducts = document.getElementById(contenedor);
                const nuevoArticulo = document.createElement("div");
                nuevoArticulo.classList.add("galeria_articulos");
                nuevoArticulo.innerHTML = `<img class="galeria_img" src="${image.url}" alt="${image.name}">
                    <p class="galeria_producto">${image.name_product}</p>
                    <p class="galeria_precio">$${image.price_product}</p>
                    <a class="galeria_link" id="${idLink}" data-bs-toggle="modal" data-bs-target="#contenido_individual">Ver producto</a>`;

                containerProducts.appendChild(nuevoArticulo);

                const gatilloLink = document.getElementById(idLink);
                fileCharge(key, gatilloLink, image, idLink);
              }
            }
          }
        }
      },
      {
        onlyOnce: true,
      }
    );
  } catch (error) {
    showMessage("Error al cargar el archivo:" + error, "error");
  }
}

downloadImage();

//funcion para cargar los articulos individualmente
function fileCharge(key, gatilloLink, image) {
  const idLink2 = `link-${Math.random().toString(32).substring(7)}`;

  if (key == "consolas") {
    var contenedor = key;

    const containerProduct2 = document.getElementById(contenedor);
    const nuevoArticulo2 = document.createElement("div");
    nuevoArticulo2.classList.add("galeria_articulos");
    nuevoArticulo2.innerHTML = `<img class="galeria_img" src="${image.url}" alt="${image.name}">
    <p class="galeria_producto">${image.name_product}</p>
    <p class="galeria_precio">$${image.price_product}</p>
    <a class="galeria_link" id="${idLink2}" >Ver producto</a>`;

    containerProduct2.appendChild(nuevoArticulo2);
    document.getElementById("consolas_container").style.display = "none";

    const nuevoEnlace = document.getElementById(idLink2);
    nuevoEnlace.addEventListener("click", (e) => {
      e.preventDefault();

      if (currentImageContainer !== null) {
        currentImageContainer.remove();
      }

      const nuevoArticulo = document.createElement("div");
      nuevoArticulo.classList.add("galeria_articulo");
      nuevoArticulo.innerHTML = `<div class="galeria_articulo_container">
        <div class="galeria_articulo_img_container">
        <img class="galeria_img_individual" src="${image.url}" alt="${image.name}">
        </div>
        <div class="galeria_articulo_contenido">
        <p class="galeria_producto_individual">${image.name_product}</p>
        <p class="galeria_precio_individual">$${image.price_product}</p>
        <p>${image.description_product}</p>
        <button class="boton_comprar">comprar</button>
        </div>
        </div>
        `;
      const containerProducts = document.getElementById("modal_contenido");
      containerProducts.insertBefore(
        nuevoArticulo,
        containerProducts.firstChild
      );

      currentImageContainer = nuevoArticulo;

      comprasIndividual(image);

      const modalBody = document.querySelector("#contenido_individual");
      if (modalBody) {
        if ("scrollBehavior" in modalBody.style) {
          modalBody.scrollTo({
            top: 0,
            behavior: "smooth",
          });
        } else {
          var currentPosition = modalBody.scrollTop;
          if (currentPosition > 0) {
            window.requestAnimationFrame(scrollToTop);
            modalBody.scrollTo(0, currentPosition - currentPosition / 8);
          }
        }
      }
    });
  } else if (key == "demonSlayer") {
    var contenedor = key;

    const containerProduct2 = document.getElementById(contenedor);
    const nuevoArticulo2 = document.createElement("div");
    nuevoArticulo2.classList.add("galeria_articulos");
    nuevoArticulo2.innerHTML = `<img class="galeria_img" src="${image.url}" alt="${image.name}">
    <p class="galeria_producto">${image.name_product}</p>
    <p class="galeria_precio">$${image.price_product}</p>
    <a class="galeria_link" id="${idLink2}" >Ver producto</a>`;

    containerProduct2.appendChild(nuevoArticulo2);
    document.getElementById("demon_slayer_container").style.display = "none";

    const nuevoEnlace = document.getElementById(idLink2);
    nuevoEnlace.addEventListener("click", (e) => {
      e.preventDefault();

      if (currentImageContainer !== null) {
        currentImageContainer.remove();
      }

      const nuevoArticulo = document.createElement("div");
      nuevoArticulo.classList.add("galeria_articulo");
      nuevoArticulo.innerHTML = `<div class="galeria_articulo_container">
    <div class="galeria_articulo_img_container">
    <img class="galeria_img_individual" src="${image.url}" alt="${image.name}">
    </div>
    <div class="galeria_articulo_contenido">
    <p class="galeria_producto_individual">${image.name_product}</p>
    <p class="galeria_precio_individual">$${image.price_product}</p>
    <p>${image.description_product}</p>
    <button class="boton_comprar">comprar</button>
    </div>
    </div>
    `;
      const containerProducts = document.getElementById("modal_contenido");
      containerProducts.insertBefore(
        nuevoArticulo,
        containerProducts.firstChild
      );

      currentImageContainer = nuevoArticulo;

      comprasIndividual(image);

      const modalBody = document.querySelector("#contenido_individual");
      if (modalBody) {
        if ("scrollBehavior" in modalBody.style) {
          modalBody.scrollTo({
            top: 0,
            behavior: "smooth",
          });
        } else {
          var currentPosition = modalBody.scrollTop;
          if (currentPosition > 0) {
            window.requestAnimationFrame(scrollToTop);
            modalBody.scrollTo(0, currentPosition - currentPosition / 8);
          }
        }
      }
    });
  } else if (key == "diversos") {
    var contenedor = key;

    const containerProduct2 = document.getElementById(contenedor);
    const nuevoArticulo2 = document.createElement("div");
    nuevoArticulo2.classList.add("galeria_articulos");
    nuevoArticulo2.innerHTML = `<img class="galeria_img" src="${image.url}" alt="${image.name}">
    <p class="galeria_producto">${image.name_product}</p>
    <p class="galeria_precio">$${image.price_product}</p>
    <a class="galeria_link" id="${idLink2}" >Ver producto</a>`;

    containerProduct2.appendChild(nuevoArticulo2);
    document.getElementById("diversos_container").style.display = "none";

    const nuevoEnlace = document.getElementById(idLink2);
    nuevoEnlace.addEventListener("click", (e) => {
      e.preventDefault();

      if (currentImageContainer !== null) {
        currentImageContainer.remove();
      }

      const nuevoArticulo = document.createElement("div");
      nuevoArticulo.classList.add("galeria_articulo");
      nuevoArticulo.innerHTML = `<div class="galeria_articulo_container">
        <div class="galeria_articulo_img_container">
        <img class="galeria_img_individual" src="${image.url}" alt="${image.name}">
        </div>
        <div class="galeria_articulo_contenido">
        <p class="galeria_producto_individual">${image.name_product}</p>
        <p class="galeria_precio_individual">$${image.price_product}</p>
        <p>${image.description_product}</p>
        <button class="boton_comprar">comprar</button>
        </div>
        </div>
        `;
      const containerProducts = document.getElementById("modal_contenido");
      containerProducts.insertBefore(
        nuevoArticulo,
        containerProducts.firstChild
      );

      currentImageContainer = nuevoArticulo;

      comprasIndividual(image);

      const modalBody = document.querySelector("#contenido_individual");
      if (modalBody) {
        if ("scrollBehavior" in modalBody.style) {
          modalBody.scrollTo({
            top: 0,
            behavior: "smooth",
          });
        } else {
          var currentPosition = modalBody.scrollTop;
          if (currentPosition > 0) {
            window.requestAnimationFrame(scrollToTop);
            modalBody.scrollTo(0, currentPosition - currentPosition / 8);
          }
        }
      }
    });
  }

  gatilloLink.addEventListener("click", (e) => {
    e.preventDefault();

    if (currentImageContainer !== null) {
      currentImageContainer.remove();
    }

    if (contenedor == "consolas") {
      const contenedor = "consolas_container";
      document.getElementById(contenedor).style.display = "flex";
      document.getElementById("demon_slayer_container").style.display = "none";
      document.getElementById("diversos_container").style.display = "none";
    } else if (contenedor == "demonSlayer") {
      const contenedor = "demon_slayer_container";
      document.getElementById(contenedor).style.display = "flex";
      document.getElementById("consolas_container").style.display = "none";
      document.getElementById("diversos_container").style.display = "none";
    } else if (contenedor == "diversos") {
      const contenedor = "diversos_container";
      document.getElementById(contenedor).style.display = "flex";
      document.getElementById("consolas_container").style.display = "none";
      document.getElementById("demon_slayer_container").style.display = "none";
    }

    const nuevoArticulo = document.createElement("div");
    nuevoArticulo.classList.add("galeria_articulo");
    nuevoArticulo.innerHTML = `<div class="galeria_articulo_container">
        <div class="galeria_articulo_img_container">
        <img class="galeria_img_individual" src="${image.url}" alt="${image.name}">
        </div>
        <div class="galeria_articulo_contenido">
        <p class="galeria_producto_individual">${image.name_product}</p>
        <p class="galeria_precio_individual">$${image.price_product}</p>
        <p>${image.description_product}</p>
        <button class="boton_comprar">comprar</button>
        </div>
        </div>
        `;
    const containerProducts = document.getElementById("modal_contenido");
    containerProducts.insertBefore(nuevoArticulo, containerProducts.firstChild);

    currentImageContainer = nuevoArticulo;
    comprasIndividual(image);
  });

  encontrado(gatilloLink, image);
  contenedoresAll();
}

function contenedoresAll() {
  const verTodo = document.querySelectorAll(".galeria_ver_todo");

  verTodo.forEach((seccion, index) => {
    seccion.addEventListener("click", (e) => {
      e.preventDefault();

      if (currentImageContainer !== null) {
        currentImageContainer.remove();
      }

      if (index == 0) {
        const contenedor = "demon_slayer_container";
        document.getElementById(contenedor).style.display = "flex";
        document.getElementById("consolas_container").style.display = "none";
        document.getElementById("diversos_container").style.display = "none";
      } else if (index == 1) {
        const contenedor = "consolas_container";
        document.getElementById(contenedor).style.display = "flex";
        document.getElementById("demon_slayer_container").style.display =
          "none";
        document.getElementById("diversos_container").style.display = "none";
      } else if (index == 2) {
        const contenedor = "diversos_container";
        document.getElementById(contenedor).style.display = "flex";
        document.getElementById("consolas_container").style.display = "none";
        document.getElementById("demon_slayer_container").style.display =
          "none";
      }
      currentImageContainer = nuevoArticulo;
    });
  });
}
