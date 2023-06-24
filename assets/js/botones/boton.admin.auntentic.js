import { signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-auth.js";
import { auth } from "../firebase.js";
import { showMessage } from "./show.message.js";

const autenticAdmin = document.getElementById("form_autentic_admin");

autenticAdmin.addEventListener("submit", async (e) => {
  e.preventDefault();

  const email = autenticAdmin["email_login_admin"].value;
  const password = autenticAdmin["password_login_admin"].value;

  try {
    const credenciales = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );

    // toastify
    showMessage("Bienvenido: " + credenciales.user.email, "success");

    document.querySelector("#email_login_admin").value = "";
    localStorage.setItem("logState", "block");
    window.location.href = "all.productos.html";
  } catch (error) {
    if (error.code == "auth/wrong-password") {
      showMessage("Password incorrecto", "error");
    } else if (error.code == "auth/user-not-found") {
      showMessage("Usuario no registrado", "error");
    } else {
      showMessage(error.message, "error");
    }
  }
});
