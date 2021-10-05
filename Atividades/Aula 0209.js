// ---------- PARTE 1 ---------
// 1 - A função pegara o valor da distância em KM e irá dividir pela quantidade de combustível em Litros, criando a média. Exemplo com 50km e 6 Litros.
function consumo(distanciakm, combustivelLit){
    return console.log(distanciakm / combustivelLit);
}
consumo(50, 6);

// 2 - A função pegará a quantidade de homens e mulheres e multiplicar pelo valor das entradas (x & y respectivamente), depois somá-los para tirar seu valor total.Exemplo c
function festa(homens, mulheres){
    let x = homens * 20;
    let y = mulheres * 17;
    return console.log(x + y);
}
festa(5, 7);

// 3 - A função pegará as notas de 2 provas e irá fazer a média entre elas, a soma das duas equivale a x. Exemplos Nota 8 e 3.
function notas(prova1, prova2){
    let x = prova1 + prova2;
    return console.log(x/2);
}
notas(8, 3);

//4 - A função pegará uma lista de alimentos de um array e imprimirá com uma virgula separando-os.

const alimento = ['maça', 'banana', 'pêra']

function virgula(){
    let virgulas = alimento.join(' , ')
    return console.log(virgulas);
}
virgula()

// --------- PARTE 2 ---------

// 1 - Recebe um valor (num) que se for maior que 10 exibirá uma mensagem.
function maior(num){
    if (num > 10){
        console.log('Esse número é maior que 10.')
    }
    else{
        console.log('Esse número é menor que 10')
    }
};
maior(11)

// 2 e 3 - Informará qual dos dois valores passados é o maior 
function valores(valor1, valor2){
    if (valor1 > valor2){
        console.log('O valor 1 é maior que o valor 2')
    }
    else if (valor2 > valor1){
        console.log('O valor 2 é maior que o valor 1')
    }
    else {
        console.log('Os valores são iguais')
    }
};
valores(10, 10)

// 4 - Identifica se o número é par ou ímpar
function parImpar(num){
    if (num % 2 == 0){
        console.log('Esse número é par')
    }
    else {
        console.log('Esse número é impar')
    }
};
parImpar(2)

// 5 - Informará se o valor (num) é multiplo de 10.
function multiplo(num){
    if (num % 10 == 0){
        console.log('Esse número é múltiplo de 10.')
    }
    else {
        console.log('Esse número não é múltiplo de 10.')
    }
};
multiplo(10)

// --------------- PARTE 3 -----------------

// 1 - O número informado será inválido caso esteja entre 15 e 25 ou 45 e 50.
function erro(num){
    if (num > 15 && num < 25 || num > 45 && num <50){   
        console.log('Número inválido')
    }
}
erro(48)

// 2 - Informará se o número é maior que 80, 25 ou igual a 40.
function erro2(num){
    if (num > 80 || num < 25 || num == 40){
        console.log('Número inválido')
    }
};
erro2(40)

// 3 - Verifacará se cada um dos valores passados juntos podem formar um triângulo. Exemplo 5, 6, 5.
function triangulo(lado1, lado2, lado3){
    if (lado1 == lado2 && lado2 == lado3){
        console.log('Esses valores formam um triangulo.')
    }
    else {
        console.log('Esses valores não formam um triangulo')
    }
};
triangulo(5,6,5);

// 4 - O nome informado precisa ser diferente de William, Rafael ou JavaScript.
function nome(name){
    if (name == 'William' || name == 'Rafael' || name == 'JavaScript' ){
        console.log('Esses nomes não estão cadastrados!')
    }
    
};
nome('Rafael')

// --------- PARTE 4 ---------

// 7 - A palavra informada (word) precisa ter 6 caracteres, caso contrário, trará uma mensagem de erro.
function palavra(word){
    if (word.length != 6){
        console.log('Caracteres inválidos, digite novamente!')
    }
};
palavra('wagner')

// ----------- PARTE 5 ------------

// 1 - O programa irá inserir a palavra "JS" em 10 posições de um vetor
function js(){
    const vetor = []
    for (let i = 0; i < 10; i++){
    vetor.push('JS');
    };
    return vetor;
};

console.log(js());






