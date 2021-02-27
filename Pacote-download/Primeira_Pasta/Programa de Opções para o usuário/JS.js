function alternative(){

    var PrimeiroNum = document.getElementById('NumeroDigitadoPeloUsuario')
    var SegundoNum = document.getElementById('OutroNumeroDigitado')
    var Resposta = document.getElementsByTagName('p')[1]
    var OpcoesDoUsuario = document.getElementsByName('OpcoesDoUsuario')

    if(PrimeiroNum.value.length == 0 || SegundoNum.value.length == 0){
        alert('[Error] Tente novamente!')
    }
    else{
        var PrimeiroNumeroDigitado = Number(PrimeiroNum.value)
        var SegundoNumeroDigitado = Number(SegundoNum.value)

        if(OpcoesDoUsuario[0].checked){
            Resposta.innerHTML = `A soma entre <span>${PrimeiroNumeroDigitado}</span> + <span>${SegundoNumeroDigitado}</span> é igual a <span>${PrimeiroNumeroDigitado+SegundoNumeroDigitado}</span>`
        }
        else if(OpcoesDoUsuario[1].checked){
            Resposta.innerHTML = `A divisão entre <span>${PrimeiroNumeroDigitado}</span> / <span>${SegundoNumeroDigitado}</span> é igual a <span>${(PrimeiroNumeroDigitado/SegundoNumeroDigitado).toFixed(2)}</span>`
        }
        else if(OpcoesDoUsuario[2].checked){
            if(PrimeiroNumeroDigitado > SegundoNumeroDigitado){
                Resposta.innerHTML = `O maior valor digitado é número <span>${PrimeiroNumeroDigitado}</span></br>
                e o menor valor digitado é o número <span>${SegundoNumeroDigitado}</span>`
            }
            else if(PrimeiroNumeroDigitado == SegundoNumeroDigitado){
                Resposta.innerHTML = `Os dois números são iguais!`
            }
            else{
                if(SegundoNumeroDigitado > PrimeiroNumeroDigitado){
                    Resposta.innerHTML = `O maior valor digitado é número <span>${SegundoNumeroDigitado}</span></br>
                    e o menor valor digitado é o número <span>${PrimeiroNumeroDigitado}</span>`
                }
            }
        }
        else if(OpcoesDoUsuario[3].checked){
            Resposta.innerHTML = `A multiplicação entre <span>${PrimeiroNumeroDigitado}</span> x <span>${SegundoNumeroDigitado}</span> é igual a <span>${PrimeiroNumeroDigitado*SegundoNumeroDigitado}</span>`
        }
        else{
            if(OpcoesDoUsuario[4].checked){
                Resposta.innerHTML = `A subtração entre <span>${PrimeiroNumeroDigitado}</span> - <span>${SegundoNumeroDigitado}</span> é igual a <span>${PrimeiroNumeroDigitado-SegundoNumeroDigitado}</span>`
            }
        }
    }
}