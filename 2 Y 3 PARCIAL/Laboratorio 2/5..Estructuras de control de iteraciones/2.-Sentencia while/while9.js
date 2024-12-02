//Cuenta cuántos números entre 1 y 50 son divisibles por 5.

let count = 0;
let i = 1;
while ( i <= 50 ) {
    count += (i % 5 === 0) ? 1 : 0;
    i++
}
console.log(count); 