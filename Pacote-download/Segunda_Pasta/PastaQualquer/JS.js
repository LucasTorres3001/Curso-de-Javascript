function comando(){

    var Num1 = document.getElementById('NumInicial')
    var Num2 = document.getElementById('NumFinal')
    var Num3 = document.getElementById('NumPasso')
    var Resposta = document.getElementsByTagName('p')[0]

    if(Num1.value.length == 0 || Num2.value.length == 0 || Num3.value.length == 0){
        Resposta.innerHTML = 'Error 404'
        alert('[Error] 404')
    }
    else{
        var NumInicio = Number(Num1.value)
        var NumFim = Number(Num2.value)
        var Passo = Number(Num3.value)
        Resposta.innerHTML = 'Contando:</br></br>'

        if(Passo <= 0){
            alert('[Error] 404')
            Resposta.innerHTML += 'Error 404'
        }
        else{
            if(NumInicio < NumFim){
                var ContadorDeNumerosPares=0
                var ContadorDeNumerosImpares=0
                var SomadorDeNumerosPares=0
                var SomadorDeNumerosImpares=0
    
                for(var i = NumInicio; i <= NumFim; i += Passo){
                    Resposta.innerHTML += ` => <span>${i}</span>`
                    if(i % 2 == 0){
                        SomadorDeNumerosPares += i
                        ContadorDeNumerosPares += 1
                    }
                    else{
                        if(i % 2 != 0){
                            SomadorDeNumerosImpares += i
                            ContadorDeNumerosImpares += 1
                        }
                    }
                }
                Resposta.innerHTML += `</br></br>Apareceram <span>${ContadorDeNumerosPares}</span> número(s) PAR(ES) e <span>${ContadorDeNumerosImpares}</span> número(s) ÍMPAR(ES)</br>
                A soma dos números PARES deu <span>${SomadorDeNumerosPares}</span> e a soma dos números ÍMPARES deu <span>${SomadorDeNumerosImpares}</span>.`
            }
            else{
                for(i = NumInicio; i >= NumFim; i -= Passo){
                    Resposta.innerHTML += `* <span>${i}</span> x <span>${NumFim}</span> = <span>${i*NumFim}</span></br>`
                }
            }
        }
    }
}