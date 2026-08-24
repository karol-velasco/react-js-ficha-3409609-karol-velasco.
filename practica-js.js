/*Reto 1: funciones, parámetros y return*/

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

// --------------------------------------------------------------------- //

/*Reto 4*/

productos.forEach((producto, indice) => {
console.log(`${indice + 1}. ${producto.nombre} - $${producto.precio} - Stock: ${producto.stock}`);
});


