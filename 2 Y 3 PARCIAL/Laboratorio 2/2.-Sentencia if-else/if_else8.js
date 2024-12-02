//Comprueba si una letra es vocal o consonante. 

function esVocal(letra) {
    let vocales = ['a', 'e', 'i', 'o', 'u'];
    if (vocales.includes(letra.toLowerCase())) {
      return true; // La letra es vocal
    } else {
      return false; // La letra es consonante
    }
  }
  
  let letra = prompt("Ingresa una letra");
  if (esVocal(letra)) {
    console.log("La letra es una vocal");
  } else {
    console.log("La letra es una consonante");
  }

