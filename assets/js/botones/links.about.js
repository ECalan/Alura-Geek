const linksAbout = document.querySelectorAll(".footer_link")

linksAbout.forEach((seccion, index) => {
    seccion.addEventListener("click", (e) => {
        e.preventDefault();
        window.location.href ="pagina.en.construccion.html"
    }
    )});