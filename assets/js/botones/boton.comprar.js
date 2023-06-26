import { showMessage } from "./show.message.js";

let contador = 0;

// Mensaje de Carrito vacio
const areaMensaje = document.getElementById("compras");
const carritoBadge = document.querySelector("#carrito_badge");
const totalArticulos = document.querySelector("#compra_total_articulos");

const mensaje = document.createElement("div");
mensaje.classList.add("articulo_en_carrito");
mensaje.id = "mensaje_carrito";
mensaje.innerHTML = `<div class="articulo_container">
        <p class="producto_individual">No tienes compras en el carrito 🥺</p>
        </div>`;
areaMensaje.insertBefore(mensaje, areaMensaje.firstChild);

const observador = new MutationObserver((mutations) => {
  mutations.forEach((mutation) => {
    const cambio = mutation.target.textContent;
    totalArticulos.innerHTML = `${cambio}`;

    if (cambio >= 1) {
      document.querySelector("#mensaje_carrito").style.display = "none";
      document.querySelector(".boton_container").style.display = "block";
    } else if (cambio == 0) {
      document.querySelector("#mensaje_carrito").style.display = "flex";
      document.querySelector(".boton_container").style.display = "none";
    }
  });
});

const observerOptions = {
  childList: true, // Observa cambios en los hijos del span
  characterData: true, // Observa cambios en el contenido del span
  subtree: true, // Observa cambios en todos los descendientes del span
};

observador.observe(carritoBadge, observerOptions);

//Ocultar compras de carrito
const carritoMostrado = document.getElementById("carrito_buy");

carritoMostrado.addEventListener("click", (e) => {
  e.preventDefault();

  setTimeout(() => {
    const dejarDeMostrar = document.querySelector(".collapse-horizontal");
    dejarDeMostrar.classList.remove("show");
  }, 120000);
});

document.addEventListener("click", (e) => {
  //Evita ejecutar código si el clic proviene de un elemento específico
  if (
    e.target.matches(".header__logo") ||
    e.target.matches(".carrito_img") ||
    e.target.matches(".header_boton") ||
    e.target.matches(".header_busqueda_icono") ||
    e.target.matches(".header_busqueda_icono2") ||
    e.target.matches(".banner_promociones_boton") ||
    e.target.matches(".img_individual") ||
    e.target.matches(".producto_individual") ||
    e.target.matches(".precio_individual") ||
    e.target.matches(".boton_quita_carrito") ||
    e.target.matches(".galeria_ver_todo") ||
    e.target.matches(".galeria_link") ||
    e.target.matches(".footer_img") ||
    e.target.matches(".footer_link") ||
    e.target.matches(".footer_message_input") ||
    e.target.matches(".footer_message_boton") ||
    e.target.matches(".btn-close") ||
    e.target.matches(".form_login_input") ||
    e.target.matches(".form_login_boton") ||
    e.target.matches(".form_registro_input") ||
    e.target.matches(".form_registro_boton") ||
    e.target.matches(".form_login_eye-show") ||
    e.target.matches(".btn")
  ) {
    return;
  }

  // Código que se ejecutará cuando haya un clic en cualquier lugar de la página
  const carrito = document.querySelector(".collapse-horizontal");
  carrito.classList.remove("show");
});

//Compras en el carrito
export function comprasIndividual(image) {
  const comprado = document.getElementById("carrito_badge");
  const compra = document.querySelectorAll(".boton_comprar");

  compra.forEach((articulo) => {
    articulo.addEventListener("click", (e) => {
      e.preventDefault();

      const idcompra = `compra-${Math.random().toString(32).substring(7)}`;

      contador++;
      comprado.innerHTML = `${contador}`;

      const nuevoArticulo = document.createElement("div");
      nuevoArticulo.classList.add("articulo_en_carrito");
      nuevoArticulo.id = idcompra;
      nuevoArticulo.innerHTML = `<div class="articulo_container">
        <div class="articulo_img_container">
        <img class="img_individual" src="${image.url}" alt="${image.name}">
        </div>
        <div class="articulo_contenido">
        <p class="producto_individual">${image.name_product}</p>
        <p class="precio_individual">$${image.price_product}</p>
        <button class="boton_quita_carrito" >Quitar</button>
        </div>
        </div>`;

      compras.insertBefore(nuevoArticulo, compras.firstChild);

      showMessage("Agregado al 🛒 😁:  " + image.name_product, "success");
      const precioProducto = image.price_product;

      const compra = {
        imagen: image.url,
        imagenAlt: image.name,
        nombreProduct: image.name_product,
        precioProduct: image.price_product,
      };

      const datosCompra = JSON.stringify(compra);

      localStorage.setItem(idcompra, datosCompra);

      precios(precioProducto);
      articulos(nuevoArticulo);
    });
  });
}

//Suma de precios en carrito y modal de compra completada
let suma = 0;

const comprado = document.getElementById("carrito_badge");
const compras = document.getElementById("compras");
const valorTotal = document.querySelector("#precio_total");
const compraTotal = document.querySelector("#compra_total_valor");

function precios(precioProducto) {
  const valor = parseFloat(precioProducto);

  suma = suma + valor;

  valorTotal.innerHTML = `$${suma.toFixed(2)}`;
  compraTotal.innerHTML = `$${suma.toFixed(2)}`;
}

// quitar elemento y valor de carrito
compras.addEventListener("click", (e) => {
  if (e.target.classList.contains("boton_quita_carrito")) {
    e.preventDefault();
    const precio = e.target.parentNode.querySelector(".precio_individual");
    const extractorTexto = precio.innerText;
    const precioSinDolar = extractorTexto.replace("$", "");
    const valorReal = parseFloat(precioSinDolar);

    suma = suma - valorReal;

    const nuevoArticulo = e.target.closest(".articulo_en_carrito");
    const idNuevoArticulo = nuevoArticulo.getAttribute("id");

    localStorage.removeItem(idNuevoArticulo);

    nuevoArticulo.remove();

    contador--;
    comprado.innerHTML = `${contador}`;

    valorTotal.innerHTML = `$${suma.toFixed(2)}`;
    compraTotal.innerHTML = `$${suma.toFixed(2)}`;
  }
});

// Boton compra nueva
const compraNueva = document.getElementById("boton_compra_nueva");

function articulos(nuevoArticulo) {
  compraNueva.addEventListener("click", (e) => {
    e.preventDefault();

    nuevoArticulo.remove();

    let keys = Object.keys(localStorage);

    let filteredKeys = keys.filter(function (key) {
      return key.startsWith("compra-");
    });

    filteredKeys.forEach(function (key) {
      localStorage.removeItem(key);
    });

    contador = contador - contador;
    comprado.innerHTML = `${contador}`;

    suma = suma - suma;

    valorTotal.innerHTML = `$${suma.toFixed(2)}`;
    compraTotal.innerHTML = `$${suma.toFixed(2)}`;
  });
}

// carga localmente de productos comprados
let keys = Object.keys(localStorage);

let filteredKeys = keys.filter(function (key) {
  return key.startsWith("compra-");
});

filteredKeys.forEach(function (key) {
  let value = JSON.parse(localStorage.getItem(key));

  contador++;
  comprado.innerHTML = `${contador}`;

  const nuevoArticulo = document.createElement("div");
  nuevoArticulo.classList.add("articulo_en_carrito");
  nuevoArticulo.id = key;
  nuevoArticulo.innerHTML = `<div class="articulo_container">
    <div class="articulo_img_container">
    <img class="img_individual" src="${value.imagen}" alt="${value.imagenAlt}">
    </div>
    <div class="articulo_contenido">
    <p class="producto_individual">${value.nombreProduct}</p>
    <p class="precio_individual">$${value.precioProduct}</p>
    <button class="boton_quita_carrito" >Quitar</button>
    </div>
    </div>`;

  compras.insertBefore(nuevoArticulo, compras.firstChild);

  const precioProducto = value.precioProduct;

  precios(precioProducto);
  articulos(nuevoArticulo);
});
