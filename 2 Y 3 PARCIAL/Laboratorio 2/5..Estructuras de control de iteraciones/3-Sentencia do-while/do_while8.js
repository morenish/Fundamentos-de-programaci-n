//Imprime los primeros 10 términos de la serie Fibonacci.

let a = 0;
let b = 1;
console.log(a);
console.log(b);
let i = 2;

do {
    let c = a + b;
    console.log(c);
    a = b;
    b = c;
    i++;
} while (i < 10);

