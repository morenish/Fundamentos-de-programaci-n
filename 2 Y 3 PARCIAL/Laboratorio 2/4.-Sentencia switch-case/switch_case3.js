//Determina el mes del año a partir de un número.

let numero = prompt("Ingresa un numero.");  //El numero ingresado debe cumplir alguna condicion para que arroje el resultado de esa condicion.
switch (numero){
    case "1":
        console.log("Enero");  //Si se cumple la condicion de este bucle se mostrara el resultado de esta linea, y si no se cumple se pasara a las siguientes condiciones.
        break;
    case "2":
        console.log("Febrero");  //Si se cumple la condicion de este bucle se mostrara el resultado de esta linea, y si no se cumple se pasara a las siguientes condiciones.
        break;
    case "3":
        console.log("Marzo");  //Si se cumple la condicion de este bucle se mostrara el resultado de esta linea, y si no se cumple se pasara a las siguientes condiciones.
        break;
    case "4":
        console.log("Abril");  //Si se cumple la condicion de este bucle se mostrara el resultado de esta linea, y si no se cumple se pasara a las siguientes condiciones.
        break;
    case "5":
        console.log("Mayo");  //Si se cumple la condicion de este bucle se mostrara el resultado de esta linea, y si no se cumple se pasara a las siguientes condiciones.
        break;
    case "6":
        console.log("Junio");  //Si se cumple la condicion de este bucle se mostrara el resultado de esta linea, y si no se cumple se pasara a las siguientes condiciones.
        break;  
    case "7":
        console.log("Julio");  //Si se cumple la condicion de este bucle se mostrara el resultado de esta linea, y si no se cumple se pasara a las siguientes condiciones.
        break;    
    case "8":
        console.log("Agosto");  //Si se cumple la condicion de este bucle se mostrara el resultado de esta linea, y si no se cumple se pasara a las siguientes condiciones.
        break;  
    case "9":
        console.log("Septiembre");  //Si se cumple la condicion de este bucle se mostrara el resultado de esta linea, y si no se cumple se pasara a las siguientes condiciones.
        break;
    case "10":
        console.log("Octubre");  //Si se cumple la condicion de este bucle se mostrara el resultado de esta linea, y si no se cumple se pasara a las siguientes condiciones.
        break;          
    case "11":
        console.log("Noviembre");  //Si se cumple la condicion de este bucle se mostrara el resultado de esta linea, y si no se cumple se pasara a las siguientes condiciones.
        break;   
    case "12":
        console.log("Diciembre");  //Si se cumple la condicion de este bucle se mostrara el resultado de esta linea, y si no se cumple se pasara a las siguientes condiciones.
        break;         
    default:  //No se cumplio ninguna de las condiciones anteriores.
        console.log("Este mes no existe");  //Al no cumplirse ninguna condicion se mostrara este resultado.
}