//Cuenta cuántos números entre 1 y 30 son divisibles por 3.

let count = 0;
let f = 1;
do {
    count += ( f % 3 ===0) ? 1 : 0;
    f++
} while (f <= 30);
    console.log(count);
    