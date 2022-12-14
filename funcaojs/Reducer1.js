const alunos = [

    {nome: "João", nota: 7.4,  bolsista: false},
    {nome: "Maria", nota: 9.2,  bolsista: true},
    {nome: "Pedro", nota: 9.4,  bolsista: false},
    {nome: "Ana", nota: 8.7,  bolsista: true}
]


const todoBolsistas = (resultado, bolsista) => resultado && bolsista
console.log(alunos.map(a => a.bolsista).reduce(todoBolsistas))

const algumBolsistas = (resultado, bolsista )  => resultado || bolsista
console.log(alunos.map(a => a.bolsista).reduce( algumBolsistas))