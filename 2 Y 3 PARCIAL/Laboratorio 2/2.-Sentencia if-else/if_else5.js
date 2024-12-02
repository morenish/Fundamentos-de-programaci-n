// Verifica si una cadena tiene menos de 10 caracteres. 

let cadena = prompt("Ingresa una cadena");

if (cadena.length < 10) {
    console.log("La cadena tiene menos de 10 caracteres"); //Si la cadena tiene 10 caracteres exactamente, entonces se mostrara que la cadena tiene mas de 10 carcateres.
} else {
    console.log("La cadena tiene mas de 10 caracteres.");
}