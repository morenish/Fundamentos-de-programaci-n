//Clasifica una nota en letras (A, B, C, D, F).

let nota = prompt("Ingresa una nota");
switch (true){
    case nota >= 90 && nota <= 100:
        console.log("A");  //Para que se cumpla esta condicion el numero debe estar dentro del rango de la 1 condicion.
        break; 
 //Si el numero no cumple la 1 condicion se pasa a la siguiente condicion.
    case nota >= 80 && nota < 90:
        console.log("B");  //Se mostrara este resultado si el numero cumple la 2 condicion.
        break;  
//No se cumplio la 2 condicion por lo que se pasa a la siguiente.
    case nota >= 70 && nota < 80:
        console.log("C");  //Si el numero si cumple la 3 condicion mostrara este mensaje.
        break;
//No se cumplio la 3 condicion por lo que se pasa a la siguiente.
    case nota >= 60 && nota < 70:
        console.log("D");  //Si se cumple con esta condicion se mostara este resultado.
        break;
//No se cumplio la 4 condicion por lo que se pasa a la siguiente.
    case nota < 60 && nota >= 0:
        console.log("F");  //Para mostar este resultado se debe cumplir la 5 condicion.
        break;
    default:  //No se cumplio ninguna de las condiciones anteriores por lo que se cierra el ciclo.
        console.log("Nota no valida.");  //Se muestra este resultado al no cumplirse ninguna de las condiciones anteriores.
}