//Verifica si una persona puede votar (mayor o igual a 18 años). 

let edad = prompt("Ingrese la edad de la persona:");

// Verifica si la edad de la persona es mayor o igual a 18
if (edad >= 18) {
  // La persona tiene mas de 18 años.
  console.log("La persona ya puede votar");
} else {
  // La persona es menor de 18 años.
  console.log("La persona no puede votar.");
}