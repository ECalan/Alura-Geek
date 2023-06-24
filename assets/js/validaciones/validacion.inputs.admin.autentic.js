//validación para Inputs

export function validarInputsAdminAutentic(form_login_input){

    const tipoDeinput = form_login_input.dataset.tipo;
    if(validadores[tipoDeinput]){
        validadores[tipoDeinput](form_login_input);
    }

    if(form_login_input.validity.valid){
        form_login_input.parentElement.classList.remove("input-container--invalid");
        form_login_input.parentElement.querySelector(".form_login_input__message__error").innerHTML = "";
    }else{
        form_login_input.parentElement.classList.add("input-container--invalid");
        form_login_input.parentElement.querySelector(".form_login_input__message__error").innerHTML = mostrarMensajeDeError(tipoDeinput, form_login_input);
    }
};

const tipoDeErrores = [
    "valueMissing",
    "typeMismatch",
    "patternMismatch",
];

const mensajesDeError = {
    email:{
        valueMissing: "El campo Email no puede estar vacío.",
        typeMismatch: "El Correo no es valido, debe tener esta estuctura: example@proveedor.com"
    },
    password:{
        valueMissing: "El campo Password no puede estar vacío.",
        patternMismatch: "Al menos 6 caracteres, máximo 12, debe contener una letra minúscula, una letra mayúscula, un número y no puede contener caracteres especiales!",
    },
}

const validadores = {
    
};

function mostrarMensajeDeError(tipoDeinput, form_login_input){
    let mensaje = "";
    tipoDeErrores.forEach(error => {
        if(form_login_input.validity[error]) {
            mensaje = mensajesDeError[tipoDeinput][error];
        }
    })
    return mensaje;
}

