const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];
const pessoas = [
    {nome: 'Luiz', idade: 62},
    {nome: 'Maria', idade: 23},
    {nome: 'Eduardo', idade: 55},
    {nome: 'Leticia', idade: 19},
    {nome: 'Rosana', idade: 32},
    {nome: 'Wallace', idade: 47},
];

const maiorQue10 = numeros.filter(num => num > 10);
console.log(maiorQue10, '\n');

const nomeMaiorQue5 = pessoas.filter(pessoa => pessoa.nome.length > 5);
console.log(nomeMaiorQue5, '\n');

const maisDe50Anos = pessoas.filter(pessoa => pessoa.idade > 50);
console.log(maisDe50Anos, '\n');

const terminaComA = pessoas.filter(pessoa => pessoa.nome.toLocaleLowerCase().endsWith('a'));
console.log(terminaComA);