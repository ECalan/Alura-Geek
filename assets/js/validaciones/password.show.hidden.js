// login_client password show-hidden
const showHidden = document.getElementById("show_hidden");

showHidden.addEventListener("click", (e) => {
    e.preventDefault()
    
    const passwordField = document.getElementById("password_login");
    const hidden = document.getElementById("show_hidden")

    if (passwordField.type === "password") {
        passwordField.type = "text";
        hidden.setAttribute("src", "/assets/img/eye_visible_hide_hidden_show.png")
         
      } else {
        passwordField.type = "password";
        hidden.setAttribute("src", "/assets/img/eye_slash_visible_hide_hidden.png")
        
      }
})

// registro_client password show-hidden

const showHiddenRegistro = document.getElementById("show_hidden_registro");

showHiddenRegistro.addEventListener("click", (e) => {
    e.preventDefault()
    
    const passwordField = document.getElementById("password_registro");
    const hidden = document.getElementById("show_hidden_registro")

    if (passwordField.type === "password") {
        passwordField.type = "text";
        hidden.setAttribute("src", "/assets/img/eye_visible_hide_hidden_show.png")
         
      } else {
        passwordField.type = "password";
        hidden.setAttribute("src", "/assets/img/eye_slash_visible_hide_hidden.png")
        
      }
})

// login_admin password show-hidden
const showHiddenAdmin = document.getElementById("show_hidden_admin");

showHiddenAdmin.addEventListener("click", (e) => {
    e.preventDefault()
    
    const passwordField = document.getElementById("password_login_admin");
    const hidden = document.getElementById("show_hidden_admin")

    if (passwordField.type === "password") {
        passwordField.type = "text";
        hidden.setAttribute("src", "/assets/img/eye_visible_hide_hidden_show.png")
         
      } else {
        passwordField.type = "password";
        hidden.setAttribute("src", "/assets/img/eye_slash_visible_hide_hidden.png")
        
      }
})

// registro_admin password show-hidden

const showHiddenRegistroAdmin = document.getElementById("show_hidden_registro_admin");

showHiddenRegistroAdmin.addEventListener("click", (e) => {
    e.preventDefault()
    
    const passwordField = document.getElementById("password_registro_admin");
    const hidden = document.getElementById("show_hidden_registro_admin")

    if (passwordField.type === "password") {
        passwordField.type = "text";
        hidden.setAttribute("src", "/assets/img/eye_visible_hide_hidden_show.png")
         
      } else {
        passwordField.type = "password";
        hidden.setAttribute("src", "/assets/img/eye_slash_visible_hide_hidden.png")
        
      }
})
