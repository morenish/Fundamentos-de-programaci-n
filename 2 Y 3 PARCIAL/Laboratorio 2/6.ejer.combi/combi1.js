// Programa para verificar edad de votación y calcular años hasta retiro

let edad = prompt("Ingresa la edad de la persona");
if (edad >= 18) {
    console.log("La persona puede votar");
} else {
    console.log("La persona no puede votar");
}

let añosParaElRetiro = 65;
console.log(("Años que le faltan trabajar para poder retirarse: "));

if (añosParaElRetiro > 0) {
    for (let i = edad; i <= añosParaElRetiro; i++) {
        console.log(i);
    }
} else {
    console.log("Ya puede retirarse.");
    
}
