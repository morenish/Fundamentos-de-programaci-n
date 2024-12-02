//Imprime los primeros 10 terminos de la serie Fibonacci

let a = 0;
let b = 1;
console.log(a);
console.log(b);
for (let i = 2; i <10; i++){
    let c = a + b;
    console.log(c);
    a = b;
    b = c;
    
}
