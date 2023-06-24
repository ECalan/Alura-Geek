//validación para Inputs

export function validarInputsContactenos(footer_message_input){

    const tipoDeinput = footer_message_input.dataset.tipo;
    if(validadores[tipoDeinput]){
        validadores[tipoDeinput](footer_message_input);
    }

    if(footer_message_input.validity.valid){
        footer_message_input.parentElement.classList.remove("input-container--invalid");
        footer_message_input.parentElement.querySelector(".footer_message_input__message__error").innerHTML = "";
    }else{
        footer_message_input.parentElement.classList.add("input-container--invalid");
        footer_message_input.parentElement.querySelector(".footer_message_input__message__error").innerHTML = mostrarMensajeDeError(tipoDeinput, footer_message_input);
    }
};

const tipoDeErrores = [
    "valueMissing",
    "typeMismatch",
    "patternMismatch",
];

const mensajesDeError = {
    nombre:{
        valueMissing: "El campo Nombre no puede estar vacío.",
        patternMismatch: "El Nombre debe contener 4 caracteres alfabéticos minimo y hasta 50 caracteres maximo!",
    },
    mensaje:{
        valueMissing: "El campo Mensaje no puede estar vacío.",
        patternMismatch: "El Mensaje debe contener 4 caracteres alphanúmericos minimo y hasta 100 caracteres maximo!"
    },
}

const validadores = {
    
};

function mostrarMensajeDeError(tipoDeinput, footer_message_input){
    let mensaje = "";
    tipoDeErrores.forEach(error => {
        if(footer_message_input.validity[error]) {
            mensaje = mensajesDeError[tipoDeinput][error];
        }
    })
    return mensaje;
}

