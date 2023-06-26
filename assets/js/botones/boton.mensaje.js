import {
  collection,
  addDoc,
} from "https://www.gstatic.com/firebasejs/9.22.0/firebase-firestore.js";
import { db } from "../firebase.js";
import { showMessage } from "./show.message.js";

//mensaje
const contactoForm = document.getElementById("footer_message");

contactoForm.addEventListener("submit", async (e) => {
  e.preventDefault();

  const nombre = contactoForm["footer_nombre"].value;
  const mensaje = contactoForm["footer_mensaje"].value;

  const response = await addDoc(collection(db, "mensajes"), {
    nombre: nombre,
    mensaje: mensaje,
  });

  document.querySelector("#footer_nombre").value = "";
  document.querySelector("#footer_mensaje").value = "";

  showMessage("Mensaje enviado 😁 ", "success");
});
