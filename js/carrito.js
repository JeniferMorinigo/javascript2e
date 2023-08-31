const productosEnCarrito = JSON.parse(localStorage.getItem("productos-en-carrito"));

const contenedorCarritoVacio = document.querySelector("#carrito-vacio");
const contenedorCarritoProductos = document.querySelector("#carrito-roductos");
const contenedorCarritoAcciones = document.querySelector("#carrito-acciones");


if (productosEnCarrito) {

    contenedorCarritoVacios.classList.add("disabled");
    contenedorCarritoProductos.classList.remove("disabled");
    contenedorCarritoAcciones.classList.add("disabled");
    
    productosEnCarrito.forEach(producto => {
      
        const div=createElement("div");
        div.classList.add("carrito-producto");
        div.innerHTML = `
        
        `
    })
    
} else {

}