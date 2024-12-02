//Determina si una cadena es "Sí" o "No".

let cadena = prompt("Ingresa una cadena")
switch (true){
    case cadena.startsWith("Si"):
        console.log("La cadena es Si");  //El dato ingresado debe cumplir la 1 condicion para que se muestre el mensaje de esta linea.
        break;  //Si el dato ingresado no cumple la 1 condicion se pasa a la siguiente condicion.

    case cadena.startsWith("No"):
        console.log("La cadena es No");  //Si esta condicion si se cumple se mostara el mensaje de esta linea. 
        break;  
    default:  //No se cumplio ninguna de las condiciones anteriores.
        console.log("Cadena desconocida.");  //Al no cumplirse ninguna de las primeras condiciones se mostrara este mensaje.
}