//consatantes y variables
const precio = [9000, 15000, 25000, 4000]
const producto = ["Remera", "Pantalon", "Gorra", "Zapatillas"]
let stock = [5, 10, 20, 50]

// Selecionar productos funcion
function productosSelecionar() {
    disponibilidad();
    let mensaje = "¿Qué producto desea comprar?\nIngrese el número correspondiente:\n\n";
    for (let i = 0; i < producto.length; i++) {
        mensaje += `${i + 1}. ${producto[i]} - $${precio[i]}\n`;
    }
    mensaje += "\n0. Salir\n";

    let seleccion = parseInt(prompt(mensaje));

    if (seleccion === 0) {
        return null; // Esto indica que quiere salir
    }

    if (isNaN(seleccion) || seleccion < 1 || seleccion > producto.length) {
        alert("Selecciona un número válido.");
        return null;
    }

    return seleccion - 1;
}

//Disponibilidad funcion
function disponibilidad() {
    console.log("Productos disponibles:");
    for (let i = 0; i < producto.length; i++) {
        console.log(`${producto[i]}: ${stock[i]} unidades`);
    }
}

//Calcular  precio descuento Funcion
function calcularPrecioConDescuento(producto, cantidad) {
    let preciounitario = precio[producto];
    let total = preciounitario * cantidad;
    let descuento = 0;
    if (cantidad >= 3) {
        descuento = total * 0.15;
    } else if (cantidad >= 2) {
        descuento = total * 0.10;
    }
    let totalConDescuento = total - descuento;
    return {total, descuento ,totalConDescuento};
}

//Resumen funcion
function resumendeCompra(producto, cantidad, precio, descuento, totalConDescuento) {
    console.log("Resumen de compra:");
    console.log(`Producto: ${producto}`);
    console.log(`Cantidad: ${cantidad}`);
    console.log(`Precio unitario: $${precio}`);
    console.log(`Descuento: $${descuento}`);
    console.log(`Total a pagar: $${totalConDescuento}`);
}

//Funcion main
function main() {
    let continuar = true;
    while (continuar) {
        let productoSeleccionado = productosSelecionar();
        if (productoSeleccionado === null) {
            continuar = false;
            break;
        }
        let cantidad = parseInt(prompt("Ingrese la cantidad que desea comprar:"));
        if (isNaN(cantidad) || cantidad < 1 || cantidad > stock[productoSeleccionado]) {
            alert("Cantidad no valida");
            continue;
        }
        stock[productoSeleccionado] -= cantidad;
        let { total, descuento, totalConDescuento } = calcularPrecioConDescuento(productoSeleccionado, cantidad);
        resumendeCompra(producto[productoSeleccionado], cantidad, precio[productoSeleccionado], descuento, totalConDescuento);
    }
}
//Ejecutar la funcion principal
main();
//Fin del programa