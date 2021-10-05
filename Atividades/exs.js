// ------- Exercícios de JavaScript -------

/* 1 - Desenvolver um programa que efetue a soma de todos os números ímpares que são múltiplos de 3 e que se encontram no conjunto dos números de 1
até 500. Imprima o resultado e quantidade de iterações do seu loop. */

let contloop1 = 0
let soma1 = 0

for (var i = 0; i <= 500; i++) {
    if (i % 2 === 1 && i % 3 === 0){
        contloop1++
        soma1 += i
    }
}

console.log(`Loops feitos: ${contloop1}`)
console.log(`Resultado: ${soma1}`)

/* 2 - Desenvolver um programa que efetue a soma de todos os números pares que são múltiplos de 31 e que se encontram no conjunto dos números de 1 até3 200. 
Imprima o resultado e quantidade de iterações do seu loop. */

let contloop2 = 0
let soma2 = 0

for( var i = 0; i <= 3200; i++) {
    if(i % 2 === 0 && i % 31 === 0){
        contloop2++
        soma2 += i
    }
}

console.log(`Loops feitos: ${contloop2}`)
console.log(`Resultado: ${soma2}`)

/* 3 - Desenvolver um programa que efetue a soma de todos os números pares que são múltiplos de 21 e também são múltiplos de 15 que se encontram no
conjunto dos números de 1 até 10000. Imprima o resultado e quantidade de iterações do seu loop. */

let soma3 = 0
let contloop3 = 0

for (var i = 0; i <= 10000; i++) {
    if (i % 2 === 0 && i % 15 === 0 && i % 21 === 0){
        contloop3++
        soma3 += i
    }
}
console.log(`Loops feitos: ${contloop3}`)
console.log(`Resultado: ${soma3}`)

/* 4 - Desenvolver um programa que conte a quantdade de elementos do array dado que estão presentes nos seguintes intervalos: [0-25], [26-50], [51-75] e [76-100].
Imprima o resultado da sua contagem para cada intervalo e a quantidadede elementos que estão fora dos 4 intervalos. */

let arr = [-5, 0, 2, 6, 8, 12, 25, 30, 31, 32, 33, 34, 35, 40, 50, 60, 62, 64,65, 66, 67, 68, 70, 80, 91, 92, 97, 99, 100, 101];

let cont1 = 0;
let cont2 = 0;
let cont3 = 0;
let cont4 = 0;

for(var i = 0; i < arr.length; i++) {
    if(arr[i] >= 0 && arr[i] <= 25){
        cont1++;       
    }
    else if(arr[i] >= 26 && arr[i] <= 50){
        cont2++;
    }
    else if(arr[i] >= 51 && arr[i] <= 75){
        cont3++;
    }
    else if(arr[i] >= 76 && arr[i] <= 100){
        cont4++;
    }
};

console.log(`Quantidade de índices entre 0 e 25 do array = ${cont1}`)
console.log(`Quantidade de índices entre 26 e 50 do array = ${cont2}`)
console.log(`Quantidade de índices entre 51 e 75 do array = ${cont3}`)
console.log(`Quantidade de índices entre 76 e 100 do array = ${cont4}`)

/* 5 - Desenvolver um programa que calcule a quantidade de elementos pares e ímpares, a média aritmética dos elementos pares e dos elementos ímpares
e a média aritmética de todos os elementos de um array dado. */

let arr2 = [2, 6, 8, 12, 17, 25, 30, 31, 32, 33, 34, 37, 40, 50, 60, 62, 64, 65, 66, 68, 69, 70, 78, 82, 93, 97, 99, 100, 102, 118];

let contpar = 0 
let contimp = 0
let somapar = 0
let somaimp = 0
let somatot = 0

for(var i = 0; i < arr2.length; i++) {
    somatot += arr2[i]
    if(arr2[i] % 2 === 0){
        contpar++
        somapar += arr2[i];
    }
    else if(arr2[i] % 2 === 1){
        contimp++
        somaimp += arr2[i];
    }

}

console.log(`Quantidade de pares: ${contpar}`)
console.log(`Quantidade de ímpares: ${contimp}`)
console.log(`Média aritmética pares é: ${somapar/contpar}`)
console.log(`Média aritmética dos ímpares é ${somaimp/contimp}`)
console.log(`Média aritmética geral é: ${somatot/arr2.length}`)

// 6 - Desenvolver uma função imprimeIntervalo() que receba 2 números como parâmetro e imprima todos os números que estão entre eles.

/*function imprimirIntervalo(n1, n2){
        if(n1 > n2){
        while(n1 <= n2){
            console.log(n1+1)
        }
    }
        else if(n1 < n2){
            while(n1 >= n2){
                console.log(n2+1)
            }
        } 
    }*/

let intervalo = ""

function imprimirIntervalo(n1, n2){
    if(n1 < n2){
    for(var i = n1; i < n2; i++){
        intervalo += `${i},`;
        }
}
    else if(n1 > n2){
        for(var i = n2; i < n1; i++){
            intervalo += `${i},`; // Concatena a string 'intervalo' com o valor de 'i' e uma vírgula
        }
    }
 console.log(`${intervalo.slice(0, -1)}`); // Uso do método slice para imprimir a string sem a vírgula presente no final
};

imprimirIntervalo(10, 1);

// 7 - Desenvolver um programa que percorra um array dado e gere um novo array apenas com elementos distintos. Imprima na tela o array sem os elementos repetidos.

let arr3 = [1, 1, 1, 1, 3, 3, 4, 5, 6, 7, 7, 7, 7, 2, 3, 4, 5];

let newarr3 = arr3.filter((filt, i) => arr3.indexOf(filt) === i); //Filtrando elementos do array, o IndexOf retornará a primeira ocorrência do elemento (filt), e colocará em um novo array, se ele se repetir, não colocará.

//console.log(newarr3);

// Outra solução

const arrDistinto = [];

for(const elemento of arr3){
    // Se o array 'arrDistinto' não incluir o elemento do array 'arr3', adicionar via push().
    // includes() retorna true caso encontre o elemento. 
    // Por isso foi utilizado o operador lógico de negação (!). Executar a instrução do if caso o includes retorne 'false'.
    if(!arrDistinto.includes(elemento)){
        arrDistinto.push(elemento);
    }
}

console.log(`Solução 1:`);
console.log(`Array = [${arr3}]`);
console.log(`Array filtrado = [${arrDistinto}]`);  

/* 8 - Desenvolver um programa que calcula e imprima o resultado da seguinte soma (Limite o resultado a 2 casas decimais):  
Soma = 1/1 + 3/2 + 5/3 + 7/4 + ... + 99/50 */

let numerador = 1  
let denomidador = 1
let soma = 0

for(var i = 1; i <= 50; i++) {
    soma += (numerador/denomidador);
    numerador += 2;
    denomidador ++;
}

console.log(soma.toFixed(2));

/* 9 - Desenvolver um programa que percorre um array dado e gera um novo array onde cada elemento corresponde ao quadrado (elemento * elemento) do
elemento do array antigo. Imprima esse novo array. */

let arr4 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const newarr4 = [];

newarr4.push(arr4.map(function(i) { //O .map irá mapear todos os índices do array e executar a função que passamos pra ele, que no caso, é índice multiplicado por ele mesmo.
    return i * i 
}))


// Outra solução, com a estrutura for.

for(const i of arr4){
    newarr4.push(i*i);
}

console.log(`arrQuadrado = [${newarr4}]`);

/* 10 - Desenvolver uma função jurosCompostos() que recebe um capital, uma taxa (em porcentagem) e um tempo como parâmetro e retorna o montante (capital + juros).
Imprima esse montante limitando a 2 casas decimais. Considere: Montante = capital ∗ (1 + taxa) */

function jurosCompostos(cap, taxa, temp){
    let taxaPer = taxa / 100 //Transformando a taxa em porcentagem
    let mt = cap * Math.pow(1 + taxaPer, temp) //Math.pow recebe dois parametros, o primeiro é o numerador e o segundo é o numero que ele será elevado
    return mt
};

console.log(`Montante: ${jurosCompostos(1000, 10, 6).toFixed(2)}`)