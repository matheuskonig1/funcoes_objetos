let alunos = [
    {
        nome: "Matheus",
        idade: 18,
        skills: ['JavaScript', 'HTML', 'CSS']
    },
    {
        nome: "Pedro",
        idade: 43,
        skills: ['Cobol', 'C#', 'Java']
    },
    {
        nome: "Dalessandro",
        idade: 41,
        skills: ['React', 'Python', 'Kotlin']
    },
    {
        nome: "Diego",
        idade: 12,
        skills: ['HTML', 'PHP', 'Ruby']
    },
    {
        nome: "Marcelo",
        idade: 31,
        skills: ['JavaScript', 'TypeScript', 'Node']
    },
]
let results = alunos.map(a => a.skills);

let user_skill = prompt("Digite a Skill")
let filtered = results.filter(function (str) {
    return str.includes(user_skill);
});

console.log(filtered)

/* 
Realmente neste exercício 4 tive mais dificuldades e não consegui realizar 100% da atividade, visto que o nome do aluno que tem a skill e a idade não aparecem no console.
*/