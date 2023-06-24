import { signOut } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-auth.js";
import { auth } from "../firebase.js";

const logout = document.getElementById("logout_admin");

logout.addEventListener("click", async () => {
  await signOut(auth);

  localStorage.setItem("logState", "none");
  window.location.href = "index.html";
});
