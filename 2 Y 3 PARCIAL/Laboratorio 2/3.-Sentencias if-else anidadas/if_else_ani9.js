//Verifica el estado de una batería (bajo, medio, alto).

let porcentaje  = prompt("Ingresa el porcentaje de la bateria")

if (porcentaje >= 0 && porcentaje <=30) {
    console.log("La bateria es baja.");
} else if(porcentaje >= 31 && porcentaje <= 79){
    console.log("La bateria es media");
    
}else if(porcentaje >= 80 && porcentaje <= 100){
    console.log("La bateria es alta");
    
}else{
    console.log("Tu bateria va a explotar");
}   
