const state = localStorage.getItem("logState");

if (state === "null") {
  localStorage.setItem("logState", "none");
  document.querySelector("#client_logout").style.display = state;
} else if (state === "none") {
  document.querySelector("#client_logout").style.display = state;
  document.querySelector("#loginup").style.display = "block";
} else if (state === "block") {
  document.querySelector("#client_logout").style.display = state;
  document.querySelector("#client_logout").style.filter = "opacity(1)";
  document.querySelector("#loginup").style.display = "none";
}
