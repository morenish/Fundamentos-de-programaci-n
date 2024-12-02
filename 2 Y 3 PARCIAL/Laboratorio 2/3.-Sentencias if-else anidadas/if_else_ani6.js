//Verifica si un número está entre 0 y 50, entre 51 y 100, o más de 100.

let num = prompt("Ingresa un numero.")
if (num >= 0 &&  num <= 50) { //comparamos el numero ingresado este en el rango requerido
    console.log("El numero esta entre el 0 y el 50");
} else if (num >= 51 && num <= 100){
    console.log("El numero esta entre el 51 y el 100");
} else { 
    console.log("El numero es mayor a 100")    //si el numero no esta en ningun rango de los anteriores es mayor a 100
}
