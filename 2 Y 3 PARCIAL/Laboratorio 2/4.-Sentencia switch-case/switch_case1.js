//Determina el día de la semana a partir de un número.

let dia = prompt("Ingresa un numero.");
switch (dia){
    case "1":
        console.log("Domingo");
        break;  //No se cumplio la condicion anterior se pasa a la siguiente. Y si se cumple termina el ciclo.
    case "2":
        console.log("Lunes");
        break;  //No se cumplio la condicion anterior se pasa a la siguiente. Y si se cumple termina el ciclo.
    case "3":
        console.log("Martes");
        break;  //No se cumplio la condicion anterior se pasa a la siguiente. Y si se cumple termina el ciclo.
    case "4":
        console.log("Miercoles");
        break;  //No se cumplio la condicion anterior se pasa a la siguiente. Y si se cumple termina el ciclo.
    case "5":
        console.log("Jueves");
        break;  //No se cumplio la condicion anterior se pasa a la siguiente. Y si se cumple termina el ciclo.
    case "6":
        console.log("Viernes");
        break;  //No se cumplio la condicion anterior se pasa a la siguiente. Y si se cumple termina el ciclo.
    case "7":
        console.log("Sabado");
        break;   //No se cumplio la condicion anterior se pasa a la siguiente. Y si se cumple termina el ciclo.   
    default: //No se cumplio NINGUNA de las condiciones anteriores.
        console.log("Este dia no existe.");
}