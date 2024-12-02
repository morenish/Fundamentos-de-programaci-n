//Verifica si un número es múltiplo de 2, 3 o ninguno.

let num = prompt("Ingresa un numero") ;
if(num % 2 === 0 && num % 3 === 0){
    console.log("El numero es multiplo de 2 y de 3");
}else if(num % 2 === 0){
    console.log("El numero es multiplo de 2");
}else if(num % 3 === 0){
    console.log("El numero es multiplo de 3.");
}else{
    console.log("El numero no es multiplo de ninguno.");
    
}

