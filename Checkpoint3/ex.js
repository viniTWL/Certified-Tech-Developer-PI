const products = [
    { 
        Name: 'Product 1',
        Value: 510,
        Quality: 5,
        Status: true
    },
    { 
        Name: 'Product 2',
        Value: 2100,
        Quality: 3,
        Status: false
    },
    { 
        Name: 'Product 3',
        Value: 1230,
        Quality: 8,
        Status: true
    },
    { 
        Name: 'Product 4',
        Value: 3400,
        Quality: 5,
        Status: false
    },
    { 
        Name: 'Product 5',
        Value: 760,
        Quality: 10,
        Status: true
    }
];

const purchases = products.filter((i) => 
    i.Value >= 482 &&
    i.Value <= 1600 &&
    i.Quality > 6 && 
    i.Status === true
);

const total = purchases.reduce((cont, item) => {
    return cont + item.Value;
},0
);

console.log(purchases);
console.log(`Total value of the purchases: ${total}`);






