let paginaActual = 1;
const limitePagina = 9;

async function obtenerProductos(pagina) {
    const productosContainer = document.getElementById("productos");
    const skip = (pagina - 1) * limitePagina;
    try {
        const response = await fetch(`https://dummyjson.com/products?limit=${limitePagina}&skip=${skip}&select=title,price,thumbnail,description`);
        const data = await response.json();

        productosContainer.innerHTML = "";

        for (let producto of data.products) {
            productosContainer.innerHTML += `
                <div class="bg-white rounded-2xl shadow overflow-hidden">
                    <img src="${producto.thumbnail}" alt="${producto.title}" class="w-full h-100 object-cover"/>
                    <div class="p-5">
                      <h3 class="text-lg font-semibold text-gray-800">${producto.title}</h3>
                      <p class="text-sm text-gray-500 mt-1">${producto.description}</p>
                      <div class="flex items-center justify-between mt-4">
                        <span class="text-blue-600 font-bold text-xl">$${producto.price}</span>
                        <button class="bg-blue-600 text-white text-sm px-4 py-2 rounded-lg hover:bg-blue-700">Agregar</button>
                      </div>
                    </div>
                </div>`;
        }
    } catch (error) {
        console.error("Error al obtener productos:", error);
    }
}

function configurarBotones() {
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

obtenerProductos(paginaActual);
configurarBotones();