//Calcula el factorial de un número.

let n = 6;
let factorial = 1;
let i = 1;

do {
    factorial *= i;
    i++;
} while (i <= n);
console.log(factorial);

