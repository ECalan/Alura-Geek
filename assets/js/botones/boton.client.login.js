import { signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-auth.js";
import { auth } from "../firebase.js";
import { showMessage } from "./show.message.js";

const loginClient = document.getElementById("form_login_client");

loginClient.addEventListener("submit", async (e) => {
  e.preventDefault();

  const email = loginClient["email_login_client"].value;
  const password = loginClient["password_login"].value;

  try {
    const credenciales = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );

    // toastify
    showMessage("Bienvenido: " + credenciales.user.email, "success");

    document.querySelector("#email_login_client").value = "";

    localStorage.setItem("logState", "block");

    window.location.reload();
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
