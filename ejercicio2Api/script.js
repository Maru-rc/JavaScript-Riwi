import {obtenerProductos} from "./productos.js"
import {configurarBotones} from "./botones.js"

let paginaActual = 1;
const limitePagina = 9;


obtenerProductos(paginaActual,limitePagina);
configurarBotones(paginaActual);