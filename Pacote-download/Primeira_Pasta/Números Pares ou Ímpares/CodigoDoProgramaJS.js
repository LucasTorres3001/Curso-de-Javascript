function numero(){

    var NumeroAleatorio1 = document.getElementById('NumeroAleatorio')
    var Imagem = document.getElementsByTagName('img')[0]
    var Resposta = document.getElementsByTagName('p')[0]

    if(NumeroAleatorio1.value.length == 0){
        Resposta.innerHTML = 'Error 404'
        Imagem.src = 'Error.png'
        Imagem.title = 'Error 404'
    }
    else{
        if(Number(NumeroAleatorio1.value) < 0){
            alert('[Error] tente novamente!')
            Resposta.innerHTML = 'Error 404'
            Imagem.src = 'Error.png'
            Imagem.title = 'Error 404'
        }
        else{
            var NumeroAleatorio = Number(NumeroAleatorio1.value)
    
            if(NumeroAleatorio % 2 == 0){
                Resposta.innerHTML = `O número <span>${NumeroAleatorio}</span> é um número <span>PAR</span>`
                Imagem.src = 'Par.png'
                Imagem.title = 'Número Par'
            }
            else{
                if(NumeroAleatorio % 2 != 0){
                    Resposta.innerHTML = `O número <span>${NumeroAleatorio}</span> é um número <span>ÍMPAR</span>`
                    Imagem.src = 'Impar.png'
                    Imagem.title = 'Número Ímpar'
                }
            }
        }
    }
}