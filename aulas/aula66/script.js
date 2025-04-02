const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];
const pessoas = [
    {nome: 'Luiz', idade: 62},
    {nome: 'Maria', idade: 23},
    {nome: 'Eduardo', idade: 55},
    {nome: 'Leticia', idade: 19},
    {nome: 'Rosana', idade: 32},
    {nome: 'Wallace', idade: 47},
];

const dobro = numeros.map(num => 2 * num);
console.log(dobro, '\n');

const nomes = pessoas.map(pessoa => pessoa.nome);
console.log(nomes, '\n');

const semNome = pessoas.map(pessoa => ({ idade: pessoa.idade }));
console.log(semNome, '\n');

const comIDs = pessoas.map((pessoa, index) => {
    const newPessoa = {...pessoa};
    newPessoa.id = index;
    return newPessoa;
});
console.log(comIDs);