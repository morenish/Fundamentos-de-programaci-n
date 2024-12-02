//Escribe un programa que determine si un número es primo utilizando un ciclo while. Luego, imprime todos
//los números primos entre 1 y el número dado.
 
    let numero = parseInt(prompt("Ingrese un número:"));{

    function esPrimo(num) {
        if (num <= 1) return false;
        let i = 2;
        while (i <= Math.sqrt(num)) {
            if (num % i === 0) return false;
            i++;
        }
        return true;
    }

    console.log(`¿El número ${numero} es primo? ${esPrimo(numero)}`);
    console.log("Números primos hasta", numero );
    for (let i = 1; i <= numero; i++) {
        if (esPrimo(i)) console.log(i);
    }
}
 