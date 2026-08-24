/*Reto 1: funciones, parámetros y return*/
console.log("\n --- Reto 1 ---\n")
function calcularTotal(precio, cantidad) {
const total = precio * cantidad;
return total;
}
const resultado = calcularTotal(50000, 3);
console.log(resultado);


function sumar(a, b) {
    const suma = a + b;
    return suma;
}
const resultadoSuma = sumar(6,9);
console.log("Suma: " +resultadoSuma);

function restar(a, b) {
    const Resta = a - b;
    return Resta;
}
const resultadoResta = restar(10,5);
console.log("Resta: " + resultadoResta);

function multiplicar(a, b) {
    const Multiplicar = a * b;
    return Multiplicar;
}
const resultadoMultiplicar = multiplicar(6,2);
console.log("Multiplicación: " + resultadoMultiplicar);

function dividir(a, b) {
  const Dividir = a / b;
  return Dividir;
}
const resultadoDividir = dividir(9,3);
console.log("División: " + resultadoDividir);

function calcularPromedio(nota1, nota2, nota3) {
  const Promedio = (nota1 + nota2 + nota3) / 3;
  return Promedio;
}
const resultadoPromedio = calcularPromedio(5, 7, 9);
console.log("Promedio: " + resultadoPromedio);

//Pregunta de control
//La diferencia entre console.log y return
//Console.log sirve para mostrar informacion en la consolo o terminal, mientras que return devulve un valor desde una funcion para utilizarla luego.

// --------------------------------------------------------------------- //

/*Reto 2: funciones flecha*/
console.log("\n--- Reto 2 ---\n")
const aplicarIva = precio => precio * 1.19;

//Convertir cuadrado(numero) a arrow function.
const cuadrado = numero => numero * numero;
console.log(cuadrado(5));

//Convertir esMayorEdad(edad) a arrow function.

const esMayorEdad = edad => edad >= 18;
console.log(esMayorEdad(19));

//Crear nombreCompleto(nombre, apellido) como arrow function.

const nombreCompleto = (nombre, apellido) => nombre + " " + apellido;
console.log(nombreCompleto("Karol", "Velasco"));

// --------------------------------------------------------------------- //

/*Reto 3*/
const productos = [
{ id: 1, nombre: 'Mouse', precio: 50000, categoria: 'Perifericos', stock: 5 },
{ id: 2, nombre: 'Teclado', precio: 90000, categoria: 'Perifericos', stock: 0 },
{ id: 3, nombre: 'Monitor', precio: 650000, categoria: 'Pantallas', stock: 3 },
{ id: 4, nombre: 'Audifonos', precio: 85000, categoria: 'Perifericos', stock: 9 },
{ id: 5, nombre: 'Laptop', precio: 2900000, categoria: 'Computadores', stock: 4 },
{ id: 6, nombre: 'Celular', precio: 1650000, categoria: 'Móviles', stock: 6 },
{ id: 7, nombre: 'Tablet', precio: 860000, categoria: 'Móviles', stock: 0 },
{ id: 8, nombre: 'Reloj Inteligente', precio: 190000, categoria: 'Accesorios', stock: 4 },
{ id: 9, nombre: 'Televisor', precio: 2650000, categoria: 'Pantallas', stock: 0 },
{ id: 10, nombre: 'Impresora', precio: 530000, categoria: 'Oficina', stock: 3 }
];
console.log(productos);

// --------------------------------------------------------------------- //

/*Reto 4*/
console.log("\n--- Reto 4 ---\n")
productos.forEach((producto, indice) => {
console.log(`${indice + 1}. ${producto.nombre} - $${producto.precio} - Stock: ${producto.stock}`);
});

// --------------------------------------------------------------------- //

/*Reto 5*/
console.log("\n--- Reto 5 ---\n")
const nombres = productos.map(producto => producto.nombre);
console.log(nombres);
//Ahora crea estos tres arreglos nuevos:
 
// preciosConIva: precio × 1.19.
const preciosConIva = productos.map(p => ({ ...p, precioIva: p.precio * 1.19 }));

//nombresMayuscula: nombres convertidos a mayúscula.
const nombresMayuscula = productos.map(p => p.nombre.toUpperCase());

//resumenProductos: textos como "Mouse cuesta $50000".
const resumenProductos = productos.map(p => `${p.nombre} cuesta $${p.precio}`);

console.log("\n--- Nombres en Mayúscula ---", nombresMayuscula);
console.log("--- Resumen de Productos ---", resumenProductos);

// --------------------------------------------------------------------- //

/*Reto 6*/
console.log("\n--- Reto 6 ---\n")
const disponibles = productos.filter(producto => producto.stock > 0);
const producto3 = productos.find(producto => producto.id === 3);

//Filtrar productos con precio mayor a $100.000.
const productosMayor100 = productos.filter(p => p.precio > 100000);
console.log("\nProductos mayores a $100.000: ", productosMayor100);

//Filtrar productos con precio entre $50.000 y $200.000.
const productosEntre50y200 = productos.filter(p => p.precio >= 50000 && p.precio <= 200000);
console.log("\nProductos entre $50.000 y $200.000: ", productosEntre50y200);

//Filtrar únicamente una categoría escogida por ti.
const productosCategoriaAccesorios = productos.filter(p => p.categoria === 'Accesorios');
console.log("\nProductos de la categoria Accesorios: ", productosCategoriaAccesorios);

//Buscar el producto con id 5.
const productosID = productos.filter(p => p.id === 5);
console.log("\nProducto con id 5: ", productosID);

//Crear una función buscarProducto(id) que use find() y retorne el producto.
function buscarProducto(id){
  const producto = productos.find(p => p.id === id);
  return producto;
}
console.log("\nProducto por ID: ", buscarProducto(6));
