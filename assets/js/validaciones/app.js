import { validarInputsLogin } from "./validacion.inputs.login.js";
import { validarInputsRegistro } from "./validacion.inputs.registro.js";
import { validarInputsContactenos } from "./validacion.inputs.contactenos.js";
import { validarInputsAdminAutentic } from "./validacion.inputs.admin.autentic.js";
import { validarInputsAdminRegistro } from "./validacion.inputs.admin.registro.js";
import { validarInputsAdminProductos } from "./validacion.inputs.admin.producto.js";

//inputs login
const inputsLogin = document.querySelectorAll("input");

inputsLogin.forEach((input) => {
  input.addEventListener("blur", (input) => {
    validarInputsLogin(input.target);
  });
});

//inputs Registro
const inputsRegistro = document.querySelectorAll("input");

inputsRegistro.forEach((input) => {
  input.addEventListener("blur", (input) => {
    validarInputsRegistro(input.target);
  });
});

//inputs Contactenos
const inputsContactenos = document.querySelectorAll("input");

inputsContactenos.forEach((input) => {
  input.addEventListener("blur", (input) => {
    validarInputsContactenos(input.target);
  });
});

//inputs Administrador Autenticar
const inputsAdminAutentic = document.querySelectorAll("input");

inputsAdminAutentic.forEach((input) => {
  input.addEventListener("blur", (input) => {
    validarInputsAdminAutentic(input.target);
  });
});

//inputs Administrador Registrar
const inputsAdminRegistro = document.querySelectorAll("input");

inputsAdminRegistro.forEach((input) => {
  input.addEventListener("blur", (input) => {
    validarInputsAdminRegistro(input.target);
  });
});

//inputs Administrador producto
const inputsAdminProductos = document.querySelectorAll("input");

inputsAdminProductos.forEach((input) => {
  input.addEventListener("blur", (input) => {
    validarInputsAdminProductos(input.target);
  });
});

//area de imagen
const dropArea = document.querySelector(".drop-area");
const archivoExistente = document.querySelector("#preview");
const dropText = document.querySelector("#drop-area_texto");
const botonAgregar = document.querySelector(".productos_boton");

botonAgregar.addEventListener("click", (e) => {
  const status = document.querySelector("#status_span");
  const datosSpan = status.textContent;

  if (datosSpan === "Seleccione de nuevo la imagen o elige otra.") {
    dropArea.classList.add("no-image");
    e.preventDefault();
  } else if (archivoExistente.childNodes.length == 0) {
    dropText.textContent = "Debes subir un archivo";
    dropArea.classList.add("no-image");
    e.preventDefault();
  } else {
    dropArea.classList.remove("no-image");
  }
});
