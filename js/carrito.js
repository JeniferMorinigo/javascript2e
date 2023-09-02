const productosEnCarrito = JSON.parse(localStorage.getItem("productos-en-carrito"));

const contenedorCarritoVacio = document.querySelector("#carrito-vacio");
const contenedorCarritoProductos = document.querySelector("#carrito-roductos");
const contenedorCarritoAcciones = document.querySelector("#carrito-acciones");


if (productosEnCarrito) {

    contenedorCarritoVacio.classList.add("disabled");
    contenedorCarritoProductos.classList.remove("disabled");
    contenedorCarritoAcciones.classList.remove("disabled");

    contenedorCarritoProductos.innerHTML = "";
    
    productosEnCarrito.forEach(producto => {
      
        const div=createElement("div");
        div.classList.add("carrito-producto");
        div.innerHTML = `
        <img class="carrito-producto-imagen" src="${producto.imagen}" alt="${producto.titulo}"> 
        <div class="carrito-producto-titulo">
            <small>Titulo</small>
            <h3>${producto.titulo}</h3>
        </div>
        <div class="carrito-producto-cantidad">
            <small>Cantidad</small>
            <p>${producto.cantidad}</p>
        </div>
        <div class="carrito-producto-precio">
            <small>Precio</small>
            <p>${producto.precio}</p>
        </div>
        <div class="carrito-producto-subtotal">
            <small>Precio</small>
            <p>${producto.precio * producto.cantidad}</p>
        </div>
        <div>
            <button class="carrito-producto-eliminar" id="${producto.id}"><i class="bi bi-trash2"></i>
            </button>
        </div>
        `;

        contenedorCarritoProductos.append(div);

    })
    
} else {
    contenedorCarritoVacio.classList.remove("disabled");
    contenedorCarritoProductos.classList.add("disabled");
    contenedorCarritoAcciones.classList.add("disabled");

}