//Escribe un programa que permita ingresar una serie de calificaciones y determine la cantidad de
//aprobados y reprobados usando while y if-else.

let aprobados = 0;{
    let reprobados = 0;
    let continuar = true;

    while (continuar) {
        let calificacion = parseFloat(prompt("Ingrese calificación (0-10):"));
        if(calificacion > 10)
            console.log("La calificacion no es valida.");
        if (calificacion >= 6) {
            if(calificacion <= 10)
            aprobados++;
        } else {
            reprobados++;
        }

        continuar = confirm("¿Desea ingresar otra calificación?");
    }

    console.log(`Aprobados: ${aprobados}, Reprobados: ${reprobados}`);
}