function conversor(){

    var ValorEmReal = document.getElementById('ValorEmReais')
    var Cout = document.getElementsByTagName('p')[0]
    var ImagemDasMoedas = document.getElementsByTagName('img')[0]
    var ValorEmDolares

    if(ValorEmReal.value.length == 0){
        Cout.innerHTML = 'Error 404'
        ImagemDasMoedas.src = 'Error.png'
        ImagemDasMoedas.title = 'Error 404'
    }
    else{
        if(Number(ValorEmReal.value) <= 0){
            alert('[Error] Tente novamente!')
            Cout.innerHTML = 'Error 404'
            ImagemDasMoedas.src = 'Error.png'
            ImagemDasMoedas.title = 'Error 404'
        }
        else{
            var ValorEmReais = Number(ValorEmReal.value)
            ValorEmDolares = (ValorEmReais*100/(544))
    
            if(ValorEmReais > 0){
                Cout.innerHTML = `Você, atualmente com <span>${ValorEmReais.toLocaleString('pt-BR',{style: 'currency',currency: 'BRL'})}</span> reais, consegue ter <span>${ValorEmDolares.toLocaleString('pt-BR',{style: 'currency',currency: 'USD'})}</span> dólar(es).`
                ImagemDasMoedas.src = 'Dolar.png'
                ImagemDasMoedas.title = 'Dólar'
            }
        }
    }
}