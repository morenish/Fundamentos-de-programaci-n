//Encuentra el primer número divisible por 7 después de 100.

let numero = prompt("Ingresa un numero despues del 100 sucesivamente");
while (numero % 7 === 0) {
        console.log(("Este es el primer numero divisiple por 7 despues del 100: " + numero));
        numero++
    
}