function MaiorEMenor(){

    var MaiorValor1 = document.getElementById('NumeroAleatorio')
    var MenorValor1 = document.getElementById('OutroNumeroAleatorio')
    var Resposta = document.getElementsByTagName('p')[0]

    if(MaiorValor1.value.length == 0 || MenorValor1.value.length == 0){
        Resposta.innerHTML = 'Error 404'
    }
    else{
        if(Number(MaiorValor1.value) < 0 || Number(MenorValor1.value) < 0){
            alert('[Error] Tente novamente!')
            Resposta.innerHTML = 'Error 404'
        }
        else{
            var MaiorValor = Number(MaiorValor1.value)
            var MenorValor = Number(MenorValor1.value)
    
            if(MaiorValor > MenorValor){
                Resposta.innerHTML = `O maior valor é o número <strong>${MaiorValor}</strong> e o menor valor é o número <strong>${MenorValor}</strong>`
            }
            else if(MaiorValor == MenorValor){
                Resposta.innerHTML = `Os dois  valores são iguais`
            }
            else{
                if(MenorValor > MaiorValor){
                    Resposta.innerHTML = `O maior valor é o número <strong>${MenorValor}</strong> e o menor valor é o número <strong>${MaiorValor}</strong>`
                }
            }
        }
    }
}