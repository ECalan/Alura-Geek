
document.querySelector(".form_registro").style.display ="none";

const botonLogin = document.getElementById("login_singup");

const cambiadorDeBoton = document.getElementById("login_singup");

let displaylogin = true;

botonLogin.addEventListener("click", (e) => {
    e.preventDefault()

    if ( displaylogin == true){
        document.querySelector(".form_login").style.display ="none";
        document.querySelector(".form_registro").style.display ="flex";
        cambiadorDeBoton.innerHTML = `Login`;
        displaylogin = false;

    }else if (displaylogin == false){
        document.querySelector(".form_registro").style.display ="none";
        document.querySelector(".form_login").style.display ="flex";
        cambiadorDeBoton.innerHTML = `Registrarse`;
        displaylogin = true;
    }
   
})


