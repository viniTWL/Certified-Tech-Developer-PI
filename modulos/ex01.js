// Importando arquivo com funções
let calculo = require('./ex01b')

// 1 - Somando
console.log("Resultado do Calculo SOMAR = "+ calculo.soma(2,3));

// 2 - Subtraindo
console.log("Resultado do Calculo SUBTRAIR = "+ calculo.sub(17,7)); 

// 3 - Multiplicando 
console.log("Resultado do Calculo MULTIPLICAR = "+ calculo.mult(3,3)); 

// 4 - Dividindo
console.log("Resultado do Calculo DIVIDIR = "+ calculo.div(20,4));

// 5 - Convertendo em Maiuscula
console.log("Colocando palavra em maiuscula = "+ calculo.convMaius('palavra'))

// 6 - Convertendo em Minuscula
console.log("Colocando palavra em minuscula = "+ calculo.convMinus('PALAVRA'))