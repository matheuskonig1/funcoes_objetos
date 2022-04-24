let aluno1 = {
    nome: 'Matheus',
    nota1: 5,
    nota2: 10
}

let aluno2 = {
    nome: 'Pedro',
    nota1: 8,
    nota2: 9
}

console.log(`1º Aluno: ${aluno1.nome} - ${aluno1.nota1} - ${aluno1.nota2}`);
console.log(`2º Aluno: ${aluno2.nome} - ${aluno2.nota2} - ${aluno2.nota2}`);
console.log("---");
let media1 = (aluno1.nota1 + aluno1.nota2) /2;
let media2 = (aluno2.nota1 + aluno2.nota2) /2;
console.log(`A média do ${aluno1.nome} é ${media1}`);
console.log(`A média do ${aluno2.nome} é ${media2}`);
console.log("---");
console.log(`A média da turma é ${(media1 + media2)/2}`);