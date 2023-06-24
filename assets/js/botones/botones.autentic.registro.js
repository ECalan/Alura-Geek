
document.querySelector(".form_registro_admin").style.display ="none";

const botonLoginAdmin = document.getElementById("autentic_singup");

const cambiadorDeBotonAdmin = document.getElementById("autentic_singup");

let displayloginAdmin = true;

botonLoginAdmin.addEventListener("click", (e) => {
    e.preventDefault()

    if ( displayloginAdmin == true){
        document.querySelector(".form_login_admin").style.display ="none";
        document.querySelector(".form_registro_admin").style.display ="flex";
        cambiadorDeBotonAdmin.innerHTML = `Autenticarse`;
        displayloginAdmin = false;

    }else if (displayloginAdmin == false){
        document.querySelector(".form_registro_admin").style.display ="none";
        document.querySelector(".form_login_admin").style.display ="flex";
        cambiadorDeBotonAdmin.innerHTML = `Nuevo Administrador`;
        displayloginAdmin = true;
    }
   
})


