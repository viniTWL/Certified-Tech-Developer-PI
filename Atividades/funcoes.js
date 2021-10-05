// Convertendo polegadas em centimetros - 1
function conversor1(pole){
    let res = pole * 2.54
    return console.log(res)
}

//Convertendo string em URL - 2
function conversor2(x){
    return console.log("https://www."+ x + ".com")

//Frase com exclamação - 3
}
function frase(word){
    return console.log(word + '!')
}

//Calculo de idade dos cachorros - 4
function conversor3(x){
    return console.log(x * 7)    
}

//Hora de trabalho - 5
function conversor4(salario, hrsTra){
    return console.log(salario / hrsTra)
}

//Calculo IMC - 6
function IMC(peso, altura){
    return console.log(peso / altura **2.)
}

//Conversor minusculo-maiusculo - 7
function conversor5(word){
    let x = word.toUpperCase()
    return console.log(x)
}

//Tipo de Dados - 8
function DataType(data){
    const x = typeof data
    return console.log(x)
}

//Circunferência do Círculo - 9
function circunferencia(raio){
    var res = 2 * Math.PI * raio
    return console.log(res)
}
conversor1(21)
conversor2('site')
circunferencia(4.2)
frase('Olá Mundo')
conversor3(5)
conversor4(4.500, 160)
IMC(72, 1.70)
conversor5('palavra')
DataType(5)
circunferencia(6.2)