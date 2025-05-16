const productos = [
  { id: 1, nombre: "Camiseta", precio: 2500 },
  { id: 2, nombre: "Pantalón", precio: 4500 },
  { id: 3, nombre: "Zapatillas", precio: 8000 }
];

let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

const contenedorProductos = document.getElementById("productos");
const contenedorCarrito = document.getElementById("carrito");
const total = document.getElementById("total");

function mostrarProductos() {
  productos.forEach(prod => {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
      <h3>${prod.nombre}</h3>
      <p>Precio: $${prod.precio}</p>
      <button onclick="agregarAlCarrito(${prod.id})">Agregar</button>
    `;
    contenedorProductos.appendChild(card);
  });
}

function agregarAlCarrito(id) {
  const producto = productos.find(p => p.id === id);
  carrito.push(producto);
  guardarCarrito();
  mostrarCarrito();
}

function eliminarDelCarrito(index) {
  carrito.splice(index, 1);
  guardarCarrito();
  mostrarCarrito();
}

function mostrarCarrito() {
  contenedorCarrito.innerHTML = "";
  let totalCompra = 0;
  carrito.forEach((prod, i) => {
    totalCompra += prod.precio;
    const li = document.createElement("li");
    li.innerHTML = `
      ${prod.nombre} - $${prod.precio}
      <button onclick="eliminarDelCarrito(${i})">Eliminar</button>
    `;
    contenedorCarrito.appendChild(li);
  });
  total.textContent = totalCompra;
}

function guardarCarrito() {
  localStorage.setItem("carrito", JSON.stringify(carrito));
}

mostrarProductos();
mostrarCarrito();
