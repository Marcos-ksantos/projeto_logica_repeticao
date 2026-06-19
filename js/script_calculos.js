const calculoPercentual = (valor)=> {
    let valorCalculado = 0.0
    
    if(valor <= 100){
        valorCalculado = valor * 0,10 
    }else if (valor <=1000){
        valorCalculado = valor * 0,15
    }else{
        valorCalculado = valor * 0,20
    }
    return valorCalculado
}