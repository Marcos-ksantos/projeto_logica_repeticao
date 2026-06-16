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

