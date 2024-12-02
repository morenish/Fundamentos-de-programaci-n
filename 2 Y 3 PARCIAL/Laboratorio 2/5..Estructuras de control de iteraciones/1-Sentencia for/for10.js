//Cuenta cuantos numeros entre 1 y 100 son divisibles por 3.

let count = 0;
for (let i = 1; i <= 100; i++) {
    count += (i % 3 === 0) ? 1 : 0;
}
console.log(count); 