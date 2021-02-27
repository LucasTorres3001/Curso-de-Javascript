function ImparOuPar(){

    var Num = document.getElementById('NumeroDigitadoPeloJogador')
    var OpcoesDoJogador = document.getElementsByName('OpcoesDeJogo')
    var Msg = document.getElementsByTagName('p')[1]
    var Imagem = document.getElementsByTagName('img')[0]

    if(Num.value.length == 0){
        alert('[Error] Tente novamente!')
        Msg.innerHTML = 'Error 404'
        Imagem.src = 'Error.png'
        Imagem.title = 'Error'
    }
    else{
        if(Number(Num.value) < 0 || Number(Num.value) > 10){
            alert('[Error] Tente novamente!')
            Msg.innerHTML = 'Error 404'
            Imagem.src = 'Error.png'
            Imagem.title = 'Error'
        }
        else{
            var NumDigitado = Number(Num.value)
            var NumAleatorio = Math.floor(Math.random()*11)

            if(OpcoesDoJogador[0].checked){
                Msg.innerHTML = 'Você escolheu <span>ÍMPAR!</span></br>'
                if((NumDigitado+NumAleatorio) % 2 == 0){
                    Msg.innerHTML += `Você jogou o número <span>${NumDigitado}</span> e o PC jogou o número <span>${NumAleatorio}</span> e o resultado foi <span>PAR</span> ...</br>
                    <span>VOCÊ PERDEU!</span>`
                    Imagem.src = 'Perdeu.png'
                    Imagem.title = 'Perdeu'
                }
                else{
                    if((NumDigitado+NumAleatorio) % 2 != 0){
                        Msg.innerHTML += `Você jogou o número <span>${NumDigitado}</span> e o PC jogou o número <span>${NumAleatorio}</span> e o resultado foi <span>ÍMPAR</span> ...</br>
                        <span>PARABÉNS! VOCÊ GANHOU! ;)</span>`
                        Imagem.src = 'Ganhou.png'
                        Imagem.title = 'Ganhou'
                    }
                }
            }
            else{
                if(OpcoesDoJogador[1].checked){
                    Msg.innerHTML = 'Você escolheu <span>PAR!</span></br>'
                    if((NumDigitado+NumAleatorio) % 2 == 0){
                        Msg.innerHTML += ` Você jogou o número <span>${NumDigitado}</span> e o PC jogou o número <span>${NumAleatorio}</span> e o resultado foi <span>PAR</span> ...</br>
                        <span>PARABÉNS! VOCÊ GANHOU! ;)</span>`
                        Imagem.src = 'Ganhou.png'
                        Imagem.title = 'Ganhou'
                    }
                    else{
                        if((NumDigitado+NumAleatorio) % 2 != 0){
                            Msg.innerHTML += `Você jogou o número <span>${NumDigitado}</span> e o PC jogou o número <span>${NumAleatorio}</span> e o resultado foi <span>ÍMPAR</span> ...</br>
                            <span>VOCÊ PERDEU!</span>`
                            Imagem.src = 'Perdeu.png'
                            Imagem.title = 'Perdeu'
                        }
                    }
                }
            }
        }
    }
}