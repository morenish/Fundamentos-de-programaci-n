//Crea un programa que calcule el total a pagar en un restaurante. Elige el tipo de cliente (normal, VIP,
//miembro) usando switch y aplica un descuento en base a eso.

let total = parseFloat(prompt("Ingresa el total de la cuenta:"));
let cliente = prompt("Ingresa un cliente (normal,vip,miembro): ");{
let descuento = 0;
switch (cliente){
    case   `vip`:
        descuento = 0.20;
        break;
    case `miembro`:
        descuento = 0.15;
        break;
    case `normal`:
        descuento = 0.05;
        break;
    default:
        console.log("Miembro no valido");
        
}
let totalFinal = total * (1 - descuento);
console.log(`Total a pagar: $${totalFinal.toFixed(2)}`);

}