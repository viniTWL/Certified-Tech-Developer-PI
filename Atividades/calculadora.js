function adição(valor1, valor2, valor3 = 0){
    return valor1 + valor2 + valor3
}

function subtração(valor1, valor2){
    return valor1 - valor2   
}

function multiplicação(valor1, valor2){
    return valor1 * valor2    
}


function divisão(valor1, valor2){
    return valor1 / valor2    
}

function quadradoDoNumero(num){
    return multiplicação(num, num)
}

function mediaDeTresNumeros(a, b, c){
    let x = adição(a, b, c) 
    return divisão(x, 3)
}

function calculaPorcentagem(num, por){
    return num - (num * por / 100)
}

function geradorDePorcentagem(p1, p2){
    let x = divisão(p1, p2)
    return multiplicação(x, 100)
}

console.log('----- Teste das operações -----')

console.log(`Somando 2 + 2 o resultado é ${adição(2, 2)}`)
console.log(`Subtraindo 2 - 2 o resultado é ${subtração(2, 2)}`)
console.log(`Multiplicando 3 x 3 o resultado é ${multiplicação(3, 3)}`)
console.log(`Divindido 9 / 3 o resultado é ${divisão(9, 3)}`)
console.log(`Dividindo 9 / 0 o resultado é ${divisão(9, 0)}`)
console.log(`Elevando 9 ao quadrado o resultado é ${quadradoDoNumero(9)}`)
console.log(`A média de 3, 4 e 5 é ${mediaDeTresNumeros(3, 4, 5)}`)
console.log(`Calculando 10% de 100 o resultado é ${calculaPorcentagem(100, 10)}`)
console.log(`Calculando 1% de 100 o resultado é ${geradorDePorcentagem(1, 100)}`)
