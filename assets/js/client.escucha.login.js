import { onAuthStateChanged } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-auth.js";
import { auth } from "./firebase.js";
import { showMessage } from "./botones/show.message.js";
import "./botones/boton.client.login.js";
import "./botones/boton.client.registro.js";
import "./botones/boton.client.logout.js";

onAuthStateChanged(auth, async (user) => {
  if (user == null) {
    //nada
  } else {
    showMessage("Bienvenido: " + user.email, "success");
  }
});
