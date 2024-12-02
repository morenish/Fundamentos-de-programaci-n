//Verificar si un numero es par o impar

let numero = prompt("Ingrese un número:");

// Calcular residuo
let residuo = numero % 2;

// Verificar si el residuo es 0
if (residuo == 0) {
  // El número es par
  console.log("El número es par");
} else {
  // El número es impar
  console.log("El número es impar");
}
