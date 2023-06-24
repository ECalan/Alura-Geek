import { onAuthStateChanged } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-auth.js";
import { auth } from "./firebase.js";
import "./botones/boton.admin.registro.js";
import "./botones/boton.admin.auntentic.js";
import "./botones/boton.logout.js";

onAuthStateChanged(auth, async (user) => {
  //console.log("usuario admin logeado:",user)
});
