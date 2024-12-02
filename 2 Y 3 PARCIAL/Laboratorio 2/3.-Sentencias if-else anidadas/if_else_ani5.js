//Determina si una cadena tiene entre 5 y 10 caracteres.

let cadena = prompt("Ingresa una cadena")

if(cadena.length <= 10 && cadena.length >= 5){
    console.log("La cadena tiene entre 5 y 10 caracteres.");
}else if(cadena.length > 10){
    console.log("La cadena tiene mas de 10 caracteres.");
}else{
    console.log("La cadena tiene caracteres indefinidos.");
    
}