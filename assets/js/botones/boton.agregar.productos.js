const paginaPrincipal = document.getElementById("galeria_agregar_producto");


paginaPrincipal.addEventListener("click", (e) => {
    e.preventDefault()
   
    window.location.href ="admin.add.producto.html"
})
