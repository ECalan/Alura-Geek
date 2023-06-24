import {
  ref,
  update,
} from "https://www.gstatic.com/firebasejs/9.22.0/firebase-database.js";
import { database } from "../firebase.js";
import { showMessage } from "./show.message.js";

const dropArea = document.querySelector(".drop-area");
const dropText = dropArea.querySelector("#drop-area_texto");
const button = dropArea.querySelector("#drop-area_button");
const input = dropArea.querySelector("#input_file");

let files;
let currentImageContainer = null;

button.addEventListener("click", (e) => {
  e.preventDefault();

  input.click();
});

input.addEventListener("change", (e) => {
  files = input.files;
  dropArea.classList.add("active");
  showFiles(files);
  dropArea.classList.remove("active");
});

dropArea.addEventListener("dragover", (e) => {
  e.preventDefault();
  dropArea.classList.add("active");
  dropText.textContent = "Suelta para subir el archivo";
});

dropArea.addEventListener("dragleave", (e) => {
  e.preventDefault();
  dropArea.classList.remove("active");
  dropText.textContent = "Arrastra y suelta la imagen";
});

dropArea.addEventListener("drop", (e) => {
  e.preventDefault();
  files = e.dataTransfer.files;
  showFiles(files);
  dropArea.classList.remove("active");
  dropText.textContent = "";
});

function showFiles(files) {
  if (files.length === 1) {
    processFile(files[0]);
  } else {
    showMessage("Solo se permite subir una imagen.", "error");
  }
}

function processFile(file) {
  if (currentImageContainer !== null) {
    currentImageContainer.remove();
  }

  const docType = file.type;
  const validExtensions = [
    "image/jpeg",
    "image/jpg",
    "image/png",
    "image/gif",
    "image/tif",
    "image/bmp",
  ];

  if (validExtensions.includes(docType)) {
    const fileReader = new FileReader();

    const id = localStorage.getItem("id");

    //const id = `file-${Math.random().toString(32).substring(7)}`;

    fileReader.addEventListener("load", (e) => {
      const fileUrl = fileReader.result;
      const fileContainer = document.createElement("div");
      fileContainer.id = id;
      fileContainer.classList.add("drop-area_file-container");
      fileContainer.innerHTML = `
                <img class ="drop-area_file-img" id="image_upload" src="${fileUrl}" alt="${file.name}" width="50px">
                <div class="status">
                    <span class="status_file-name">${file.name}</span>
                    <span class="status-text" id="status_span">loading...</span>
                </div>
            `;

      const previewContainer = document.querySelector("#preview");
      previewContainer.insertBefore(fileContainer, previewContainer.firstChild);

      currentImageContainer = fileContainer;
    });

    fileReader.readAsDataURL(file);
    uploadFile(file, id);

    document.querySelector(".drop-area_preview").style.display = "flex";
    document.querySelector(".drop-area_text").style.display = "none";
  } else {
    showMessage("No es un archivo válido.", "error");
    document.querySelector(".drop-area_text").style.display = "flex";
  }
}

async function uploadFile(file, id) {
  const agregarProducto = document.getElementById("form_productos");
  const selector = document.querySelector("#selector");

  agregarProducto.addEventListener("submit", (e) => {
    e.preventDefault();

    const section = selector.value;
    const nombreProducto = agregarProducto["nombre_producto"].value;
    const precioProducto = agregarProducto["precio_producto"].value;
    const descripcionProducto = agregarProducto["descripcion_producto"].value;

    try {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);

      fileReader.onload = function (event) {
        const fileUrl = event.target.result;
        const fileData = {
          name: file.name,
          url: fileUrl,
          name_product: nombreProducto,
          price_product: precioProducto,
          description_product: descripcionProducto,
        };

        update(ref(database, `Productos/${section}/${id}`), fileData)
          .then(() => {
            window.location.href = "all.productos.html";
          })
          .catch((error) => {
            showMessage("Error al subir el archivo:" + error, "error");
          });
      };
    } catch (error) {
      showMessage("Error al cargar el archivo:" + error, "error");
    }
  });
}

// Datos a Editar
const section = localStorage.getItem("seccion");
const id = localStorage.getItem("id");

if (section === "consolas") {
  var datoConsolas = "consolas";
} else if (section === "demonSlayer") {
  var datoConsolas = "demonSlayer";
} else if (section === "diversos") {
  var datoConsolas = "diversos";
}

const datos = JSON.parse(localStorage.getItem(datoConsolas));
const imagen = datos.url;
const nombreImagen = datos.name;
const seccion = section;
const nombre = datos.name_product;
const precio = datos.price_product;
const descripcion = datos.description_product;

document.querySelector("#selector").value = seccion;
document.querySelector("#nombre_producto").value = nombre;
document.querySelector("#precio_producto").value = precio;
document.querySelector("#descripcion_producto").value = descripcion;

const fileContainer = document.createElement("div");
fileContainer.id = id;
fileContainer.classList.add("drop-area_file-container");
fileContainer.innerHTML = `
    <img class ="drop-area_file-img" id="image_upload" src="${imagen}" alt="${nombreImagen}" width="50px">
    <div class="status">
        <span class="status_file-name">${nombreImagen}</span>
        <span class="status-text" id="status_span">Seleccione de nuevo la imagen o elige otra.</span>
    </div>`;

const previewContainer = document.querySelector("#preview");
previewContainer.insertBefore(fileContainer, previewContainer.firstChild);
document.querySelector(".drop-area_preview").style.display = "flex";
document.querySelector(".drop-area_text").style.display = "none";

currentImageContainer = fileContainer;
