//ESTRUTURA DE REPETIÇÃO FOR
const divFor = document.querySelector('#div-for')

for(i = 0;i < 20; i++ ){
    console.log(i, 'lorena')

    divFor.innerHTML += `${i} - Lorena <br>`
}

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

