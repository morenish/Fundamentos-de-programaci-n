//Determina si un año es bisiesto o no.

let año = prompt("Ingrese un año:");

// Año bisiesto o no
let residuo = año % 4;

// Verificar si el año es bisiesto
if (residuo === 0) { //Si no se cumple on esta condicion pasara a la siguiente.
  console.log("El año es bisiesto");
} else {
  console.log("El año no es bisiesto");
}