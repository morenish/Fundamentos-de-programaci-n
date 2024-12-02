//Determina el color del semáforo (rojo, amarillo, verde).

let num = prompt("Ingresa un numero");
switch (true){
    case num.startsWith("1"):  //Si el numero ingresado cumple esta condicion el color sera verde
        console.log("El semaforo esta en verde");
        break;  //Si el numero ingresado no cumple la primera condicion se pasa a la siguiente condicion.
    case num.startsWith("2"):  
        console.log("El semaforo esta en amarillo"); //Si el numero ingresado cumple la 2 condicion se mostrara este mensaje.
        break; //Si tampoco se cumple esta condicion se pasara a la siguiente.
    case num.startsWith("3"):
        console.log("El semaforo esta en rojo");  //Si el numero ingresado cumple la 3 condicion se mostrara esto.
        break;
    default: //Si el numero ingresado no cumple ninguna de las condiciones anteriores se rompera el ciclo, y se mostrara otro mensaje.
        console.log("No se reconoce este numero.");
}