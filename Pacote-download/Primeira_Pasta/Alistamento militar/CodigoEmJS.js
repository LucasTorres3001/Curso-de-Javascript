function alistamento(){

    var AnoDeNascimentoDoUsuario = document.getElementById('AnoDeNascimentoDoUsuario')
    var data = new Date()
    var AnoAtual = data.getFullYear()
    var Resposta = document.getElementsByTagName('p')[0]
    var Imagem = document.getElementsByTagName('img')[0]
    var IdadeDoUsuario = AnoAtual - Number(AnoDeNascimentoDoUsuario.value)

    if(AnoDeNascimentoDoUsuario.value.length == 0){
        Resposta.innerHTML = '[ERROR] Tente novamente!'
        Imagem.src = 'images.png'
        Imagem.title = 'Error 404'
    }
    else{
        if(Number(AnoDeNascimentoDoUsuario.value) < 0 || Number(AnoDeNascimentoDoUsuario.value) > AnoAtual){
            alert('[Error] Tente novamente!')
            Resposta.innerHTML = 'Error 404'
            Imagem.src = 'images.png'
            Imagem.title = 'Error 404'
        }
        else{
            if(IdadeDoUsuario < 18){
                Resposta.innerHTML = `No momento você está com ${IdadeDoUsuario} anos de idade... Ainda faltam ${18-IdadeDoUsuario} anos para você poder ir se alistar.</br>É para você ter ir se alistar no ano de ${Number(AnoDeNascimentoDoUsuario.value)+18}`
                Imagem.src = 'MenorDeIdade.png'
                Imagem.title = 'Menor de idade'
            }
            else if(IdadeDoUsuario == 18){
                Resposta.innerHTML = `No momento você já tem ${IdadeDoUsuario} anos. Portanto, já está na hora de você ir se alistar.`
                Imagem.src = '18Anos.png'
                Imagem.title = 'Idade'
            }
            else{
                if(IdadeDoUsuario > 18){
                    Resposta.innerHTML = `No momento você está com ${IdadeDoUsuario} anos de idade. Portanto, já se passaram ${IdadeDoUsuario-18} anos para você ter ido se alistar.</br>Era para você ter ido se alistar no ano de ${Number(AnoDeNascimentoDoUsuario.value)+18}`
                    Imagem.src = 'Sargento.png'
                    Imagem.title = 'Maior de idade'
                }
            }
        }
    }
}