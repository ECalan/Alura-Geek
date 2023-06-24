//validación para Inputs

export function validarInputsAdminProductos(productos_input){

    const tipoDeinput = productos_input.dataset.tipo;
    if(validadores[tipoDeinput]){
        validadores[tipoDeinput](productos_input);
    }

    if(productos_input.validity.valid){
        productos_input.parentElement.classList.remove("input-container--invalid");
        productos_input.parentElement.querySelector(".productos_input__message__error").innerHTML = "";
    }else{
        productos_input.parentElement.classList.add("input-container--invalid");
        productos_input.parentElement.querySelector(".productos_input__message__error").innerHTML = mostrarMensajeDeError(tipoDeinput, productos_input);
    }
};

const tipoDeErrores = [
    "valueMissing",
    "typeMismatch",
    "patternMismatch",
];

const mensajesDeError = {
    nombre_producto:{
        valueMissing: "El campo Nombre no puede estar vacío.",
        patternMismatch: "El Nombre debe contener 4 caracteres alphanúmericos minimo, puede contener (-) y hasta 50 caracteres maximo!",
    },
    precio_producto:{
        valueMissing: "El campo Precio no puede estar vacío.",
        patternMismatch: "El Precio debe contener de 1-6 digitos seguido de un punto(.) y 2 digitos para centavos!"
    },
    descripcion_producto:{
        valueMissing: "El campo Descripción no puede estar vacío.",
        patternMismatch: "El Mensaje debe contener de 4 hasta 100 caracteres alphanúmericos como maximo sin signos ni guiones."
    },
    
}

const validadores = {
    
};

function mostrarMensajeDeError(tipoDeinput, productos_input){
    let mensaje = "";
    tipoDeErrores.forEach(error => {
        if(productos_input.validity[error]) {
            mensaje = mensajesDeError[tipoDeinput][error];
        }
    })
    return mensaje;
}


