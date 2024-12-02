//Realiza un programa que determine el signo zodiacal basado en el día y mes de nacimiento del usuario
//utilizando if-else anidados.

let dia = parseInt(prompt("Ingrese su día de nacimiento:"));{
let mes = parseInt(prompt("Ingrese su mes de nacimiento (1-12):"));
let signo = "";

if ((mes === 3 && dia >= 21) || (mes === 4 && dia <= 19 )) {
    signo = "Aries";
} else if ((mes === 4 && dia >= 20 ) || (mes === 5 && dia <= 20 )) {
    signo = "Tauro";
} else if ((mes === 5 && dia >= 21 ) || (mes === 6 && dia <= 20 )){
    signo = "Geminis";
} else if ((mes === 6 && dia >= 21 ) || (mes === 7 && dia <= 22 )){
    signo = "Cancer";
} else if ((mes === 7 && dia >= 23 ) || (mes === 8 && dia <= 22 )){
    signo = "Leo";
} else if ((mes === 8 && dia >= 23 ) || (mes === 9 && dia <= 22 )){
    signo = "Virgo";
} else if ((mes === 9 && dia >= 23 ) || (mes === 10 && dia <= 22 )){
    signo = "Libra";
} else if ((mes === 10 && dia >= 23 ) || (mes === 11 && dia <= 21 )){
    signo = "Escorpio";
} else if ((mes === 11 && dia >= 22 ) || (mes === 12 && dia <= 21 )){
    signo = "Sagitario";
} else if ((mes === 12 && dia >= 22 ) || (mes === 1 && dia <= 19 )){
    signo = "Capricornio";
} else if ((mes === 1 && dia >= 20 ) || (mes === 2 && dia <= 18 )){
    signo = "Acuario";
} else if ((mes === 2 && dia >= 19) || (mes === 3 && dia <= 20)){
    signo = "Virgo";   
}    

alert(`Su signo zodiacal es: ${signo}`);
}