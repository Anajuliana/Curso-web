const escola = [{
    nome: "Lais",
    endereco: "Conj sao sebastiao",
    notafinal: 6,
    sala: 3,
    turno: "Noite"
},

{
    nome: "Ysaac",
    endereco: "Deus quer",
    notafinal: 3,
    sala: 4,
    turno: "Noite"
},

{
    nome: "Ana",
    endereco: "Morada so sol",
    notafinal: 3,
    sala: 5,
    turno: "Tarde"
}]



for (let i = 0 ; i < escola.length ; i ++){
    console.log(`\nNome do aluno: ${escola[i].nome}     \nSua nota: ${escola[i].notafinal}`)
    console.log(`Endereço: ${escola[i].endereco}`)
    console.log(`Turno: ${escola[i].turno}`)
    console.log(`Sala: ${escola[i].sala}\n`)

}