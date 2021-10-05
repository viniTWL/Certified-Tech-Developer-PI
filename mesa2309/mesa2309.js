
const persons = [
    {height:1.60, sex:'F'},
    {height:1.72, sex:'M'},
    {height:1.73, sex:'F'},
    {height:1.58, sex:'F'},
    {height:1.75, sex:'M'},
    {height:1.90, sex:'M'},
    {height:1.70, sex:'F'},
    {height:2.00, sex:'M'},
    {height:1.72, sex:'F'},
    {height:1.59, sex:'F'},
    {height:1.76, sex:'M'},
    {height:1.81, sex:'M'}
];

const major = Math.max(...persons.map((i) => i.height));

const minor = Math.min(...persons.map((i) => i.height));

const womens = persons.filter((i) => i.sex === 'F')

const mediaheight = (
    womens.reduce((acm, i) => {
        return acm + i.height;
    }, 0) /womens.length).toFixed(2);


const mens = persons.filter((i) => i.sex === 'M').length


module.exports = {major, minor, mediaheight, mens}