import { onAuthStateChanged } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-auth.js";
import { auth } from "./firebase.js";
import { showMessage } from "./botones/show.message.js";
import "./botones/boton.admin.logout.js";

const galeria = document.querySelector(".galeria");

onAuthStateChanged(auth, async (user) => {
  if (user == null) {
    window.location.href = "index.html";
  } else {
    showMessage("Bienvenido: " + user.email, "success");
  }
});
