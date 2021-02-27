function tinta(){

    var Imagem = document.getElementsByTagName('img')[0]
    var Altura = document.getElementById('AlturaDaParede')
    var Largura = document.getElementById('LarguraDaParede')
    Resposta = document.getElementsByTagName('p')[0]

    if(Altura.value.length == 0 || Largura.value.length == 0){
        Resposta.innerHTML = 'Error 404'
        Imagem.src = 'Error.png'
        Imagem.title = 'Error 404'
    }
    else{
        if(Number(Altura.value) <= 0 || Number(Largura.value) <= 0){
            alert('[Error] Tente novamente!')
            Resposta.innerHTML = 'Error 404'
            Imagem.src = 'Error.png'
            Imagem.title = 'Error 404'
        }
        else{
            var AlturaDaParede = Number(Altura.value)
            var LarguraDaParede = Number(Largura.value)
    
            if(AlturaDaParede > 0 && LarguraDaParede > 0){
                Resposta.innerHTML = `A altura da parede é <span>${AlturaDaParede} m</span> e sua largura é de <span>${LarguraDaParede} m</span>. Portanto, para</br>pintar a
        parede por completa será preciso de <span>${((AlturaDaParede*LarguraDaParede)/2).toFixed(2)} l</span> de tinta.`
                Imagem.src = 'Tinta.png'
                Imagem.title = 'Tinta'
            }
        }
    }
}