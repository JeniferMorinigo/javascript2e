const productos = [
    {
        id: "Caño 1/4",
        titulo: "Caño 1/4",
        imagen: "./img/caño.jpg",
        categoria: {
            nombre: "Caño 1/4",
            id: "caño"
        },
        precio: 45000
    },
    {
        id: "Caño 3/8",
        titulo: "Caño 3/8",
        imagen: "./img/caño.jpg",
        categoria: {
            nombre: "Caño 3/8",
            id: "caño"
        },
        precio: 60000
    },
    {
        id: "Caño 1/2",
        titulo: "Caño 1/2",
        imagen: "./img/caño.jpg",
        categoria: {
            nombre: "Caño 1/2",
            id: "caño"
        },
        precio: 75000
    },
    {
        id: "Caño 5/8",
        titulo: "Caño 5/8",
        imagen: "./img/caño.jpg",
        categoria: {
            nombre: "Caño 5/8",
            id: "caño"
        },
        precio: 90000
    },
]

const contenedorProductos =document.querySelector("#contenedor-productos");
const botonesCategorias = document.querySelectorAll(".boton-categorias");
const tituloPrincipal =document.querySelector("#titulos-principal");
let botonesAgregar =document.querySelectorAll(".producto-agregar");
const numerito =document.querySelector("numerito"); 

function cargarProductos(productosElegidos) {

    contenedorProductos.innerHTML ="";
    
    productosElegidos.forEach(producto => {

        const div = document.createElement("div")
        div.classList.add("producto");
        div.innerHTML=`
            <img class="producto-imagen" src="${producto-imagen}" alt="${producto.titulo}">
            <div class="producto-detalles">
                <h3 class="producto-titulo">${producto.titulo}</h3>
                <p class="producto-precio">${producto.precio}</p>
                <button class="producto-agregar" id="${producto.id}"</button>
            </div>
        `;
        contenedorProductos.append(div);

    })
    actualizarBotonesAgregar();
}
cargarProductos(productos);

cargarCategorias.forEach(boton=>{
    boton.addEventListener("click", (e)=> {

        botonesCategorias.forEach(boton => boton.classList.remove("active"));
        e.currentTarget.classList.add("active");

        if(e.currentTarget.id !="todos") {
            const productoCategoria = productos.find(producto => producto.categoria.id === e.currentTarget.id);

            tituloPrincipal.innertext = productoCategoria.categoria.nombre;

           const productosBoton = productos.filter(producto => producto.categoria.id === e.currentTarget.id)
           cargarProductos(productosBoton);
        } else{
            tituloPrincipal.innertext ="todos los productos";
            cargarProductos(productos);
        }
    })
});

function actualizarBotonesAgregar() {
    botonesAgregar =document.querySelectorAll(".producto-agregar");

    botonesAgregar.forEach(boton => {
        boton.addEventListener("click", agregarAlCarrito);
    });
}

const productosEnCarrito =[];

function agregarAlCarrito() {

    const idBoton = e.currentTarget.id;
    const productoAgregado = productos.find(producto => producto.id === idBoton);
    
    if(productosEnCarrito.some(producto => producto.id === idBoton)) {
       const index = productosEnCarrito.findIndex(producto => producto.id === idBoton);
       productosEnCarrito[index].cantidad++;
    } else{
        productoAgregado.cantidad = 1;
        productosEnCarrito.push(productoAgregado);
    }
    
    actualizarNumerito();

    localStorage.setItem("productos-en-carrito"), JSON.stringify(productosEnCarrito);
}
function actualizarNumerito() {
    let numerito = productosEnCarrito.reduce((acc, producto) => acc + producto.cantidad, 0)
    numerito.innertext = nuevoNumerito;
}