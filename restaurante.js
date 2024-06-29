const container = document.getElementById("container-productos");

const titulo = document.getElementById("nuestros-productos");

//

const productos = [

    {
        "codigo": 1,
        "nombre": "CMilanesa co papas fritas o pure",
        "imagen": "https://images.squarespace-cdn.com/content/v1/579bd3a2197aea7c6b7aa2e2/1651795291164-VP0L5HKHWV1NXVS4HGA0/Milanesa-a-caballo-vs-milanesa-napolitana-by-puerto-la-boca-san-diego.jpg?format=750w",
        "precio": 2900,
        "cantidad": 1,
    },

    {
        "codigo": 2,
        "nombre": "Ñoquis con salsa boloñesa",
        "imagen": "https://cdn.elcocinerocasero.com/imagen/paso-receta/1000/2016-05-26-18-07-22/noquis-con-salsa-bolonesa-paso-4.jpeg",
        "precio": 2000,
        "cantidad": 1,
    },

    {
        "codigo": 3,
        "nombre": "Empanadas salteñas",
        "imagen": "https://www.clarin.com/img/2018/05/23/S1uISXQJX_1256x620__2.jpg",
        "precio": 2500,
        "cantidad": 1,
    },

    {
        "codigo": 4,
        "nombre": "CMilanesa co papas fritas o pure",
        "imagen": "https://images.squarespace-cdn.com/content/v1/579bd3a2197aea7c6b7aa2e2/1651795291164-VP0L5HKHWV1NXVS4HGA0/Milanesa-a-caballo-vs-milanesa-napolitana-by-puerto-la-boca-san-diego.jpg?format=750w",
        "precio": 2900,
        "cantidad": 1,
    },

    {
        "codigo": 5,
        "nombre": "Ñoquis con salsa boloñesa",
        "imagen": "https://cdn.elcocinerocasero.com/imagen/paso-receta/1000/2016-05-26-18-07-22/noquis-con-salsa-bolonesa-paso-4.jpeg",
        "precio": 2000,
        "cantidad": 1,
    },

    {
        "codigo": 6,
        "nombre": "Empanadas salteñas",
        "imagen": "https://www.clarin.com/img/2018/05/23/S1uISXQJX_1256x620__2.jpg",
        "precio": 2500,
        "cantidad": 1,
    },

    {
        "codigo": 7,
        "nombre": "CMilanesa co papas fritas o pure",
        "imagen": "https://images.squarespace-cdn.com/content/v1/579bd3a2197aea7c6b7aa2e2/1651795291164-VP0L5HKHWV1NXVS4HGA0/Milanesa-a-caballo-vs-milanesa-napolitana-by-puerto-la-boca-san-diego.jpg?format=750w",
        "precio": 2900,
        "cantidad": 1,
    },

    {
        "codigo": 8,
        "nombre": "Ñoquis con salsa boloñesa",
        "imagen": "https://cdn.elcocinerocasero.com/imagen/paso-receta/1000/2016-05-26-18-07-22/noquis-con-salsa-bolonesa-paso-4.jpeg",
        "precio": 2000,
        "cantidad": 1,
    },

    {
        "codigo": 9,
        "nombre": "Empanadas salteñas",
        "imagen": "https://www.clarin.com/img/2018/05/23/S1uISXQJX_1256x620__2.jpg",
        "precio": 2500,
        "cantidad": 1,
    },

]

//

let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

function mostrarProductos(productos) {

    productos.forEach(el => {

        const card = document.createElement("div");
        card.className = "card-productos";

        const nombre = document.createElement("h2");
        nombre.innerText = el.nombre.toUpperCase();
        nombre.className = "nombre";

        const imagen = document.createElement("img");
        imagen.src = el.imagen;
        imagen.className = "img-productos";

        const precio = document.createElement("p")
        precio.innerText = `${el.precio}`;
        precio.className = "precio";

        const boton = document.createElement("btn");
        boton.innerText = "Seleccionar";
        boton.className = "boton-productos";
        boton.onclick = () => agregarAlCarrito(el.codigo);

        card.appendChild(imagen);
        card.appendChild(nombre);
        card.appendChild(precio);
        card.appendChild(boton);

        container.appendChild(card);

    });

};

mostrarProductos(productos);

function agregarAlCarrito(id) {
    const productoAgregado = productos.find(el => el.codigo === id);
    if (carrito.some (el => el.codigo === productoAgregado.codigo)) {
        let indiceProducto = carrito.findIndex(el => el.codigo === productoAgregado.codigo);
        console.log(indiceProducto);
        carrito[indiceProducto].cantidad++;
    } else {
        carrito.push(productoAgregado);
    }
    localStorage.setItem("carrito", JSON.stringify(carrito));
}