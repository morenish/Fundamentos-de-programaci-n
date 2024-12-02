// Verifica si una persona puede votar, conducir o ambas.

let edad = prompt("Ingresa la edad"); //Ingresamos la edad de la persona.
if(edad >= 18){  //Comparamos si la edad ingresada es mayor o igual a 18, y si es asi cumple la condicion.
    console.log("La persona puede votar y conducir"); 
}else if(edad >= 17){
    console.log("La persona solo puede conducir"); //Si la edad de la persona es igual o mayor a 17 solo puede conducir.
}else {
    console.log("La persona no puede votar ni conducir"); //Si la edad de la persona es menor a 17 no puede realizar nada.
}