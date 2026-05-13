export {configurarBotones};
import {obtenerProductos} from "./productos.js";
function configurarBotones(paginaActual) {
    const botonSiguiente = document.getElementById("boton-adelante");
    const botonAtras = document.getElementById("boton-atras");

    botonSiguiente.addEventListener("click", () => {
        paginaActual++;
        obtenerProductos(paginaActual);
    });

    botonAtras.addEventListener("click", () => {
        if (paginaActual > 1) {
            paginaActual--;
            obtenerProductos(paginaActual);
        }
    });

}