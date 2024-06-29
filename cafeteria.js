const container = document.getElementById("container-productos");

const titulo = document.getElementById("nuestros-productos");

//

const productos = [

    {
        "codigo": 1,
        "nombre": "Cafe",
        "imagen": "https://www.paulinacocina.net/wp-content/uploads/2023/10/cafe-capuchino-paulina-cocina-recetas.jpg",
        "precio": 2900,
        "cantidad": 1,
    },

    {
        "codigo": 2,
        "nombre": "Medialunas",
        "imagen": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRf5zAqmzfJDALeB9dnCkanKOukv-lT7sOTYg&s",
        "precio": 2000,
        "cantidad": 1,
    },

    {
        "codigo": 3,
        "nombre": "Tostado",
        "imagen": "https://acdn.mitiendanube.com/stores/001/292/222/products/img_50431-89d9bb17b15ce6a18516008846651443-640-0.jpg",
        "precio": 2500,
        "cantidad": 1,
    },

    {
        "codigo": 4,
        "nombre": "Cafe",
        "imagen": "https://www.paulinacocina.net/wp-content/uploads/2023/10/cafe-capuchino-paulina-cocina-recetas.jpg",
        "precio": 2900,
        "cantidad": 1,
    },

    {
        "codigo": 5,
        "nombre": "Medialunas",
        "imagen": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRf5zAqmzfJDALeB9dnCkanKOukv-lT7sOTYg&s",
        "precio": 2000,
        "cantidad": 1,
    },

    {
        "codigo": 6,
        "nombre": "Tostado",
        "imagen": "https://acdn.mitiendanube.com/stores/001/292/222/products/img_50431-89d9bb17b15ce6a18516008846651443-640-0.jpg",
        "precio": 2500,
        "cantidad": 1,
    },

    {
        "codigo": 7,
        "nombre": "Cafe",
        "imagen": "https://www.paulinacocina.net/wp-content/uploads/2023/10/cafe-capuchino-paulina-cocina-recetas.jpg",
        "precio": 2900,
        "cantidad": 1,
    },

    {
        "codigo": 8,
        "nombre": "Medialunas",
        "imagen": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRf5zAqmzfJDALeB9dnCkanKOukv-lT7sOTYg&s",
        "precio": 2000,
        "cantidad": 1,
    },

    {
        "codigo": 9,
        "nombre": "Tostado",
        "imagen": "https://acdn.mitiendanube.com/stores/001/292/222/products/img_50431-89d9bb17b15ce6a18516008846651443-640-0.jpg",
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