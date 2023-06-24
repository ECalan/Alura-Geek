// iconos _ página principal
const principalPage = document.getElementById("Logo_AluraGeek");

principalPage.addEventListener("click", (e) => {
    e.preventDefault()
    
    window.location.href ="index.html"
})

const paginaPrincipal2 = document.getElementById("Logo_AluraGeek2");

paginaPrincipal2.addEventListener("click", (e) => {
    e.preventDefault()
    
    window.location.href ="index.html"
})

// boton _ página principal
const paginaPrincipalBoton = document.getElementById("regresar_pagina_principal");

paginaPrincipalBoton.addEventListener("click", (e) => {
    e.preventDefault()
    window.location.href ="index.html"
})