import { signOut } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-auth.js";
import { auth } from "../firebase.js";

const logout = document.getElementById("admin_logout");

logout.addEventListener("click", async () => {
  await signOut(auth);
  window.location.reload();
});
