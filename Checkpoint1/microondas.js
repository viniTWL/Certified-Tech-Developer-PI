// os parametos já foram predefinidos como 'Inexistente' e '0', caso o usuário não coloque parametros.
function microondas(alimento, alteraçao){
    //o microondas irá analisar qual foi o alimento escolhido com o switch e irá colocar seu tempo padrão.
    switch (alimento) {
        case 'pipoca':
            time = 10;
            break;
        case 'macarrao':
            time = 8;
            break;
        case 'carne':
            time = 15;
            break;
        case 'feijao':
            time = 12;
            break;
        case 'brigadeiro':
            time = 8;
            break;
        default:
            return console.log('Alimento inexistente!')
    }
    // tempo total será a soma da alteração feita pelo usuário e o tempo padrão
    var total = alteraçao + time;

    //Condição do tempo dos alimentos
    if (total > time * 2 && total <= time * 3){
        console.log(`Você selecinou o alimento ${alimento} e seu tempo padrão é ${time} segundos, o tempo total é ${total} segundos.`)
        console.log('A comida queimou!');
    if (alimento = 0){
        console.log('Alimento inexistente!')
    }
    }
    else if (total < time){
        console.log(`Você selecinou o alimento ${alimento} e seu tempo padrão é ${time} segundos, o tempo total é ${total} segundos.`)
        console.log('Tempo insuficiente!');
    }
    else if (total >= time * 3){
        console.log('KABUUUUUUM!!!');
    }
    else{
        console.log(`Você selecinou o alimento ${alimento} e seu tempo padrão é ${time} segundos, o tempo total é ${total} segundos.`)
        console.log('Prato pronto, bom apetite!');
    }
}

// Executa a função
// Exemplo com Pipoca, e um sem alimento
microondas('pipoca', 1)
 