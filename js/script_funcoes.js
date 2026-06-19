/*function mensagem(){
    console.log('marcos')
}
mensagem()

function mensagemLinda(txt){
    console.log(txt)
}
mensagemLinda('Brasil vai dar um couro de 6 x 1')

function Numero(num, num1){
    return num + num1
}
console.log('A soma dos númeors é', Numero(20,47))

const multiplicacao = function(num1, num2){
    return num1 * num2
}
console.log(multiplicacao(67,1))

console.log('---ARROW FUNCTION---')

const msgArrow = () => {
    console.log('Outra mensagem na arrow function')
}
msgArrow()



const divisaoNum = (valor1, valor2) => {

    let resposta

    if ((valor1 > 0) && (valor2 > 0)){
        resposta =  valor1/valor2
    }else{
        resposta = ('Não é possivel dividir por zero')
    }
    return resposta
}

console.log(divisaoNum(134,2))

console.log(parseInt(Math.random()))
console.log(parseInt(Math.random()* 100))

setTimeout(()=>{
    console.log('Executou após 5s')
},5000)

let cont = 0

const intervalo = setInterval(()=>{
    cont++
    console.log(cont, 'Intervalo de conta')

    if(cont == 3){
        clearInterval(intervalo)
    }
},2000)

let contVolta = 0, numSorteado = 0

const sorteo = setInterval(()=>{
    contVolta++

    numSorteado = parseInt(Math.random() * 60)

    console.log(`${contVolta} o número sorteado ${numSorteado}`)

    divNumSorteio.innerHTML +=` ${contVolta} numero sorteado ${numSorteado}
<br>`
    if(numSorteado == 6) {
        console.log('---->SORTEIO ENCERRADO<----')

        divNumSorteio.innerHTML += '---->SORTEIO ENCERRADO<----'
        clearInterval(sorteo)
        contVolta = 0
        numSorteado = 0
    }
}, 2000)*/

const divNumSorteio = document.querySelector('#div-num-sorteio')

let contVolt = 0, numSortead = 0, contPar = 0, contImpar = 0

const sorteio = setInterval(() => {
    contVolt++

    numSortead = parseInt(Math.random() * 60)

    console.log(`${contVolt} o número sorteado ${numSortead}`)

    if (numSortead % 2 == 0) {
        contPar++
    } else {
        contImpar++
    }
    divNumSorteio.innerHTML += `${contVolt} numero gerado ${numSortead}- ${numSortead % 2 == 0 ? 'par' : 'impar'}<br>`

    if (contVolt == 6) {
        console.log('--->ENCERRADO<---')
    }
    
    divNumSorteio.innerHTML += `-->ENCERRADO<--<br>
    TOTAL GERADOS${contVolt}<br>
    TOTAL PAR ${contPar}<br>
    TOTAL IMPAR ${contImpar}<br>
    `
    clearInterval(sorteio)
    contVolt = 0
    numSortead = 0
},1000)
