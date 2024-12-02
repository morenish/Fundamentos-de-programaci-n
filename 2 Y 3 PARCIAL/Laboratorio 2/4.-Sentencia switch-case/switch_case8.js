//Convierte un número del 1 al 5 en su nombre en inglés

let num = prompt("Ingresa un numero");
switch (true){
    case num.startsWith("1"):
        console.log("one"); //Si el numero ingresado cumple la 1 condicion se mostrara el mensaje de esta linea.
        break; //No se cumple esta condicion y se pasa a la siguiente.

    case num.startsWith("2"):
        console.log("two");  //Si se cumple la 2 condicion se mostrara el mensaje de esta linea.
        break;  //Si tampoco se cumplio la 2 condicion se pasa a la siguiente.

    case num.startsWith("3"):
        console.log("three");  //Si se cumple la 3 condicion se mostrara el mensaje de esta linea.
        break;  //Si tampoco se cumple la 3 condicion se pasa a la siguiente.

    case num.startsWith("4"):
        console.log("four");  //Si se cumple la 4 condicion se mostrara el mensaje de esta linea.
        break;  //Si tampoco se cumple la 4 condicion se pasa a la siguiente.

    case num.startsWith("5"): 
        console.log("five");  //Si se cumple la 5 condicion se mostrara el mensaje de esta linea. 
        break;   //Si tampoco se cumple la 5 condicion se pasa a la siguiente.
    default:  //Se rompe el ciclo.
        console.log("No se reconoce este numero.");  //Si no se cumple ninguna de las condiciones anteriores se mostrara el mensaje de este mensaje.
}