/*
function soma (a,b,c){

    return (a+b) * c
}

console.log(soma(0,2,5)) 
*/

const escola = [{
    nome: "lais",
    endereco: "conj sao sebastiao",
    notafinal: 6,
    sala: 3,
    turno: "noite"
},

{
    nome: "ysaac",
    endereco: "deus quer",
    notafinal: 3,
    sala: 4,
    turno: "noite"
},

{
    nome: "Ana",
    endereco: "morada so sol",
    notafinal: 3,
    sala: 5,
    turno: "tarde"
}]

function Alunos(a){
    return(
        console.log(`O aluno: ${escola[a].nome},mora no endereço ${escola[a].endereco},na sala ${escola[a].sala},no turno ${escola[a].turno} e ficou de prova final e tirou ${escola[a].notafinal}`)
    )
    }
Alunos(0)
Alunos(1)
Alunos(2)