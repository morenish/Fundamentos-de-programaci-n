//Verifica si una cadena es "Hola", "Adiós" o "Desconocido".

let cadena = prompt("Ingresa una cadena.");

switch (true){
    case cadena.startsWith("H"):  //La cadena debe empezar com H para que se cumpla la 1 condicion.
        console.log("La cadena es Hola"); //Si se cumple la 2 condicion mostrara este mensaje.
        break; //No se cumplio la 2 condicion por lo que se pasa a la segunda condicion.

    case cadena.startsWith("A"):  //Para que se cumpla la 2 condicion la cadena debe empezar con A
        console.log("La cadena es Adios");  //Si se cumple esta condicion mostrara este mensaje.
        break;
    default:  //No se cumplio ninguna condicion.
        console.log("Cadena desconocida.");  //Al no cumplirse ninguna condicion se mostrara este mensaje.
}