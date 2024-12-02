//Verifica si un numero es divisisble por 2, 3 o ambos.

let numero = prompt("Ingresa un numero"); // Ingresamos un numero

if (numero % 2 === 0 && numero % 3 === 0) { 
        console.log("El número es divisible por 2 y por 3");  //Sacamos el residuo del numero al dividirlo entre 2 y 3, y si nos da cero se cumple la condicion.
    } else if (numero % 2 === 0){
        console.log("El número es divisible solo por 2");  //Si al usar % en 2, el residuo no da 0, entonces el numero solo es divisible por 2.
    }//Si el residuo del numero divivido entre 2 no da 0, se divide entre 3.
    else if(numero % 3 === 0){  
        console.log("El número es divisible solo por 3");  //Si el residuo de dividir el numero entre 3 da cero entocnes el numero solo es divisible por 3.
    } else {
        console.log("El número no es divisible por 2 ni por 3");  //Si el residuo de las 2 divisiones no da 0, entonces el numero no es divisible ni por 2 ni por 3.
    }
