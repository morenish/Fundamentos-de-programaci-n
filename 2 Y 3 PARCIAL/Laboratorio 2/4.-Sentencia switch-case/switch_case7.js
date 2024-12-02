//Verifica la estación del año a partir de un mes.

let mes = prompt("Ingresa un mes");
switch (true){
    case mes.startsWith("enero") || mes.startsWith("febrero") || mes.startsWith("diciembre"):  
        console.log("Invierno");  //Para que se cumpla esta condicion el dato ingresado debe cumplir con la condicion anterior.
        break;  //Si no se cumple la 1 condicion se pasa a la segunda.

    case mes.startsWith("marzo") || mes.startsWith("abril") ||mes.startsWith("mayo"):
        console.log("Primavera");  //Para que se cumpla esta condicion el dato ingresado debe cumplir con la condicion anterior.
        break;  //Si no se cumple la 2 condicion se pasa a la tercera.

    case mes.startsWith("junio") || mes.startsWith("julio") || mes.startsWith("agosto"):
        console.log("Verano");  //Para que se cumpla esta condicion el dato ingresado debe cumplir con la condicion anterior.
        break;  //Si no se cumple la 3 condicion se pasa a la cuarta.

    case mes.startsWith("septiembre") || mes.startsWith("octubre") || mes.startsWith("noviembre"):
        console.log("Otoño");  //Para que se cumpla esta condicion el dato ingresado debe cumplir con la condicion anterior.
        break;  //Si no se cumple la 4 condicion ya no ay mas condiciones.
    default:
        console.log("No es ninguna estacion.");  //No se cumplio ninguna de las condiciones anteriores por lo que se muestra el mensaje de esta linea.
}