let entrada = require("readline-sync");

let lado1:number = entrada.question("Digete um lado: ");
let lado2:number = entrada.question("Digete um lado: ");
let lado3:number = entrada.question("Digete um lado: ");

if (lado3>lado2 + lado1 &&
    lado2> lado1 + lado3 &&
    lado1> lado2 + lado3){console.log(" não É UM TRIANGULO")}

else if (lado3 == lado2  && lado3 == lado1 && lado2 == lado1 ) {console.log("Equilatero")}

else if(lado2==lado3 || lado3 == lado1){console.log("Isóceles")}

else if (lado1 != lado2 && lado1 != lado3){console.log("Escaleno")}


else{console.log("é um triangulo")}