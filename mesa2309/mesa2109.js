
// Parte II
// Declarando arrays
let idade = [15, 17, 19, 21, 24, 25, 26, 28, 30, 31, 35, 38, 39, 40, 42];
let opiniao = ["3 Ótimo", "2 Bom", "1 Regular", "3 Ótimo", "2 Bom", "1 Regular", "3 Ótimo", "2 Bom", "1 Regular", "3 Ótimo", "2 Bom", "1 Regular", "3 Ótimo", "2 Bom", "1 Regular"];
let idadeOpiniao = [];

// Concatenando idades e opiniões:
opiniao.forEach(
    function (opiniao, i) {
        idadeOpiniao = opiniao.concat(" -- ", idade[i]);
        console.log(idadeOpiniao);
    }
);

// A média das idades das pessoas que responderam ótimo:
let somaIdades = 0

for (let i = 0; i < opiniao.length; i++) {
    if (opiniao[i] == "3 Ótimo") {
        somaIdades = idade[i] + somaIdades
    }
}

let mediaOtimo = opiniao.filter(
    function (otimo)  {
        return otimo == "3 Ótimo";
    }
)
console.log(somaIdades/mediaOtimo.length);

// A quantidade de pessoas que responderam regular:
let mediaRegular = opiniao.filter(
    function (regular)  {
        return regular == "1 Regular";
    }
)
console.log(mediaRegular.length);

// A porcentagem de pessoas que responderam bom entre todos os espectadores analisados:
let contadorBom = opiniao.filter(
    function (bom)  {
        return bom == "2 Bom";
    }
)
console.log(((contadorBom.length/opiniao.length)*100).toFixed(1)+"%");