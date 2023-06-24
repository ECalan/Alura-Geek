import {
  ref,
  onValue,
} from "https://www.gstatic.com/firebasejs/9.22.0/firebase-database.js";
import { database } from "../firebase.js";
import { removeFile } from "./all.productos.remove.js";
import { showMessage } from "./show.message.js";

function downloadImage() {
  try {
    const imagesInfo = ref(database, "Productos");

    onValue(
      imagesInfo,
      (snapshot) => {
        const data = snapshot.val();

        for (const key in data) {
          if (Object.hasOwnProperty.call(data, key)) {
            const sections = data[key];

            for (const idElement in sections) {
              const idContainer = `container-${Math.random()
                .toString(32)
                .substring(7)}`;
              const idRemove = `remove-${Math.random()
                .toString(32)
                .substring(7)}`;
              const idEdit = `edit-${Math.random().toString(32).substring(7)}`;

              if (Object.hasOwnProperty.call(sections, idElement)) {
                const image = sections[idElement];

                const containerProducts =
                  document.getElementById("all_products");
                const nuevoArticulo = document.createElement("div");

                nuevoArticulo.classList.add("galeria_articulos");
                nuevoArticulo.id = idContainer;
                nuevoArticulo.innerHTML = `<img class="galeria_img_edit" id="${idEdit}" src="/assets/img/Edit.png" alt="Editar">
                        <img class="galeria_img_remove" id="${idRemove}" src="/assets/img/Remove.png" alt="Editar">
                        <img class="galeria_img" src="${image.url}" alt="${image.name}">
                        <p class="galeria_producto">${image.name_product}</p>
                        <p class="galeria_precio">$${image.price_product}</p>
                        <p >${image.description_product}</p>`;

                containerProducts.appendChild(nuevoArticulo);

                //Elementos a Remover
                const gatilloRevome = document.getElementById(idRemove);
                removeFile(key, idElement, gatilloRevome, nuevoArticulo);
                //Elementos a Editar
                const gatilloEdit = document.getElementById(idEdit);
                editFile(key, idElement, gatilloEdit, image);
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

// Datos para Editar en la pagina admin.edit.producto.html
function editFile(key, idElement, gatilloEdit, image) {
  if (key == "consolas") {
    var contenedor = "consolas";
    var id = idElement;
  } else if (key == "demonSlayer") {
    var contenedor = "demonSlayer";
    var id = idElement;
  } else if (key == "diversos") {
    var contenedor = "diversos";
    var id = idElement;
  }

  gatilloEdit.addEventListener("click", (e) => {
    e.preventDefault();

    const datos = JSON.stringify(image);

    localStorage.setItem("seccion", contenedor);
    localStorage.setItem("id", id);
    localStorage.setItem(`${contenedor}`, datos);

    window.location.href = "admin.edit.producto.html";
  });
}
