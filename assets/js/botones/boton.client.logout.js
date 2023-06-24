import { signOut } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-auth.js";
import { auth } from "../firebase.js";

const logout = document.getElementById("client_logout");

logout.addEventListener("click", async () => {
  await signOut(auth);

  localStorage.setItem("logState", "none");

  window.location.reload();
});
