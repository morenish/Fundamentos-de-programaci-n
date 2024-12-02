//Verifica el estado del clima (frio, templado, caliente).

let temperatura = prompt("Ingresa la temperatura")  //Ingresamos la temperatura.

if(temperatura < 15){
    console.log("El clima esta frio"); //Si la temperatura es menor a 15 esta frio.
}else if(temperatura < 25){
    console.log("El clima es templado"); //Si la condicion anterior no se cumple y si el clima es menor a 25 esta templado.
}else {
    console.log("El clima es caliente"); //Si no se cumple ninguna de las condicines anteriores se cumple significa que la temperatura es mayor y por ende hace calor.
}
