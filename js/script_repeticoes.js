//ESTRUTURA DE REPETIÇÃO FOR
const divFor = document.querySelector('#div-for')

for(i = 0;i < 20; i++ )
    console.log(i, 'lorena')

    divFor.innerHTML += `${i} - Lorena <br>`


//CONTADOR/ACUMULADOR

const ImputNum = document.querySelector('#num')
const btnNum = document.querySelector('#btn-num')
const divContNum = document.querySelector('#div-cont-acum')

let cont = 0
let acum = 0.0

btnNum.addEventListener('click', (evt)=>{
     let numDigitado = Number(inputNum.value)

     cont++
     acum += mumDigitado
     divContAcum.innerHTML =` TOTAL E NÚMEROS DIGITADOS É ${cont} <br> A SOMA DOS NÚMEROS É : ${Acum}
`
     inputNum.value = ''

})

//CONTROLANDO FOR
const inputFrase = document.querySelector('#frase')
const inputNumRepeticao = document.querySelector('#num-repeticao')
const btnFrase = document.querySelector('#btn-frase')
const divFrase = document.querySelector('#div-frase')

btnFrase.addEventListener('click', (evt)=> {
    let numRepeti = Number(inputNumRepeticao.value)
    let frase = inputFrase.value

    for (i = 0; i< numRepeti; i++){
        divFrase.innerHTML += `${i + 1} - ${frase} <br>`
    }
})

//COLEÇÃO DE DADOS  - ARRAY

const letras = ['a' , 'b' , 'c' , 'd' , 'e']
const divArray = document.querySelector('#div-array')



for(i = 0;i <5;i ++){
    divArray.innerHTML += `${letras[i]} <br>`
}


//FOR IN
const divForIN = document.querySelector('#div-forin')

for(let posicao in letras){
    divForIN.innerHTML += `${letras[posicao]}<br>`
}

//FOR OF

const divForOf = document.querySelector('#div-forof')

for(let elemento of letras){
    divForOf.innerHTML += `${elemento} <br>`
}

//FOREACH

const divForEach = document.querySelector('#div-foreach')

letras.forEach ((elemento, posicao)=>{
    divForEach.innerHTML += `${posicao + 1} - ${elemento} <br>`
})

//LISTA OBJETO LITRAL - FOR

const pessoas = [
    {nome: 'Maria Flor', idade: 25, renda: 8500},
    {nome: 'Joerdison Souza', idade: 75, renda: 5000},
    {nome: 'Taoca', idade: 28, renda: 500},
    {nome: 'Chicó', idade: 36, renda: 100},
    {nome: 'João Grilo', idade: 32, renda: 80},
]

//LISTANDO OBJETO LITERAL - FOR
const divListaObjFor = document.querySelector('#div-listaobj-for')

for(i = 0 ; i < pessoas.length;i++){
    divListaObjFor.innerHTML += `${pessoas[i].nome} - ${pessoas[i].idade} - R$
     ${pessoas[i].renda.toFixed(2).replace('.','.')} <br>`
}

//LISTANDO OBJETO LITERAL - FOR/IN

const divListaObjForIn = document.querySelector
('#div-listaobj-forin')

for(let indice in pessoas){
    divListaObjForIn.innerHTML += `${indice} - ${pessoas[indice].nome} -
    ${pessoas[indice].idade} - R$ ${pessoas[indice].renda.toFixed(2).replace ('.','.')} <br>`
}

//LISTANDO OBJETO LITERAL - FOR/OFF

const divListaObjForOff = document.querySelector
('#div-listaobj-foroff')

let contForOf = 0

for(let elem of pessoas){
    contForOf ++

    divListaObjForOff.innerHTML += `${contForOf} - ${elem.nome},
    ${elem.idade} - R$ ${elem.renda.toFixed(2).replace ('.','.')} <br>`
}

//LISTANDO OBJETO LITERAL - FOR/EACH

const divListaObjForEach = document.querySelector
('#div-listaobj-foreach')

pessoas.forEach((elem, i)=>{
    divListaObjForEach.innerHTML += `${i + 1} - ${elem.nome} -
    ${elem.idade} - R$ ${elem.renda.toFixed(2).replace ('.','.')} <br>`
})