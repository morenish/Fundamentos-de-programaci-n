//Verifica si una persona es adolescente (entre 13 y 19 años). 

let edad = prompt("Ingresa la edad de la persona.")

if (edad >= 13 && edad <= 19) {  //Se evalua la edad aqui y debe de cumplirla para arrojar el resultado de la linea siguiente.
    console.log("La persona es un adolescente.");
} else {
    console.log("La persona no es adolescente.");  //Al no cumplirse la condicion anterior se muestra este mensaje.
    
}