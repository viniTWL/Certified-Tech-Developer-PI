function podeSubir(alt, acomp){
    if (alt >= 1.4 && alt < 2.0){
        console.log('A pessoa pode subir.');}
    else if (alt < 1.4 && alt >= 1.2 && acomp == true){
        console.log('A pessoa pode subir, porém acompanhada.');}
    else if (alt < 1.2){
        console.log('A pessoa não pode subir, nem acompanhada.');
    }
    }

podeSubir(1.1, true)