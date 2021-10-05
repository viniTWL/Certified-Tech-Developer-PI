// Callbacks
// Função executado após o processamento de outra funcão.

let salarioBruto = 5000;
let salarioLiquido = 0;

function getSalario(salBruto)  {
    const inss = salBruto * 0.11;
    const vr = salBruto * 0.05;
    const vt = salBruto * 0.06;
    const descontos = inss + vr + vt
    salarioLiquido = salBruto - descontos;
}

getSalario(salarioBruto)
console.log(`O salário líquido é ${salarioLiquido}`);

function cumprimentar(nome) {
    console.log('Olá, ' + nome);
  }
  
  function incluirNome(callback) {
    let nome = 'Vanessa'
    callback(nome);
  }
  
  incluirNome(cumprimentar);

const frutas = ['Maçã', 'Banana', 'Melancia']

function listaCompras(nome, indice) {
    console.log(`${indice + 1} - ${nome}`)
}
frutas.forEach(listaCompras)


var data = new Date(); //Pegando data atual
var ano = data.getFullYear(); //Pegando apenas o ano

let pets = [
  {
  name: 'Bilu',
  raca: 'Pincher',
  age: ano - 2018,
  cliente: true
  }
];

