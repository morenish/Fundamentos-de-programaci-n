//Verifica el tipo de usuario (admin, editor, usuario).

let persona = prompt("Ingresa una persona");
switch (true){
    case persona.startsWith("jefe"): 
        console.log("Es admin");  //Si la persona ingresada es jefe, eso significa que es un admin, en caso de que no lo sea se pasara a la siguiente condicion.
        break;
    case persona.startsWith("trabajador"):  //Si la persona es un trabajador significa que es un editor, si no lo es se pasara a evaluar la ultima condicion.
        console.log("Es un editor");
        break;
    case persona.startsWith("cliente"):  //Si la persona es un cliente, es un usuario.
        console.log("Es un usuario");
        break; //En dado caso de que la persona ingresada no cumpla con ninguna de las condiciones anteriores se rompera el bucle.
    default:
        console.log("No se reconoce a esta persona.");  //Al romperse el bucle se muestra este mensaje.
}