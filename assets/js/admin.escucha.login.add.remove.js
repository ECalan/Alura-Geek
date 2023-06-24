import { onAuthStateChanged } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-auth.js";
import { auth } from "./firebase.js";
import { showMessage } from "./botones/show.message.js";

onAuthStateChanged(auth, async (user) => {
  if (user == null) {
    window.location.href = "index.html";
  } else {
    showMessage("Bienvenido: " + user.email, "success");
  }
});
