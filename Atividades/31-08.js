const filmes = ['star wars', 'totoro', 'rocky', 'pulp fiction', 'la vida es bella'];
function ConverterMaiusculas(array){
    const aux = [];
        for (let i = 0; i < array.length; i++)
            aux.push(array[i].toUpperCase());
            return aux;
};

const filmesMaiusculas = ConverterMaiusculas(filmes)
console.log(filmesMaiusculas)


