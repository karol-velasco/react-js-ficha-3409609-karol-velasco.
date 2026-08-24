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

/*Reto 2: funciones flecha*/

function aplicarIva(precio) {
return precio * 1.19;
}

const aplicarIva = (precio) => {
return precio * 1.19;
};

const aplicarIva = precio => precio * 1.19;

//Convertir cuadrado(numero) a arrow function.
const cuadrado = numero => numero * numero;
console.log(cuadrado(5));

//Convertir esMayorEdad(edad) a arrow function.
function esMayorEdad(edad) { return edad >= 18; }

const esMayorEdad = edad => edad >= 18;
console.log(esMayorEdad(19));

//Crear nombreCompleto(nombre, apellido) como arrow function.

const nombreCompleto = (nombre, apellido) => nombre + " " + apellido;
console.log(nombreCompleto("Karol", "Velasco"));
