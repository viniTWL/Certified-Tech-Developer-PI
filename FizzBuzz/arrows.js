const fizzbuzz = (num1, num2) =>{
    for (i = 1; i < 100; i++){
    if (i % num1 === 0 && i % num2 == 0 ){
        console.log(`O número ${i} é FizzBuzz`)
    }
        else if (i % num1 == 0){
            console.log(`O número ${i} é Fizz`)
    }
        else if (i % num2 == 0){   
            console.log(`O número ${i} Buzz`)
    }
        else {
            console.log(`O número ${i} não se encaixa em nenhum dos parâmetros`)
        }
    }
};

console.log(fizzbuzz(3, 5))

