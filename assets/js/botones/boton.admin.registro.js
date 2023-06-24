import { createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-auth.js";
import { auth } from "../firebase.js";
import { showMessage } from "./show.message.js";

const registroAdmin = document.getElementById("form_registro_admin");

registroAdmin.addEventListener("submit", async (e) => {
  e.preventDefault();

  const email = registroAdmin["email_registro_admin"].value;
  const password = registroAdmin["password_registro_admin"].value;

  try {
    const userCredentials = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );

    // toastify
    showMessage("Bienvenido: " + userCredentials.user.email, "success");

    document.querySelector("#email_registro_admin").value = "";
    localStorage.setItem("logState", "block");
    window.location.href = "all.productos.html";
  } catch (error) {
    if (error.code == "auth/email-already-in-use") {
      showMessage("Email ya en uso", "error");
    } else {
      alert("something went wrong");
    }
  }
});
