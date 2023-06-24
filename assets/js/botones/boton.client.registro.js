import { createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-auth.js";
import { auth } from "../firebase.js";
import { showMessage } from "./show.message.js";

const registroClient = document.getElementById("form_registro_client");

registroClient.addEventListener("submit", async (e) => {
  e.preventDefault();

  const email = registroClient["email_registro_client"].value;
  const password = registroClient["password_registro"].value;

  try {
    const userCredentials = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );

    // window.location.reload()

    // toastify
    showMessage("Bienvenido: " + userCredentials.user.email, "success");

    document.querySelector("#email_registro_client").value = "";

    localStorage.setItem("logState", "block");

    window.location.reload();
  } catch (error) {
    if (error.code == "auth/email-already-in-use") {
      showMessage("Email ya en uso", "error");
    } else {
      alert("something went wrong");
    }
  }
});
