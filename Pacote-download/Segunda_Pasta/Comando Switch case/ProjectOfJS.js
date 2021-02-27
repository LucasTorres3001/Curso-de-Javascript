function posicoes(){

    var posicao = document.getElementById('num')
    var msg = document.getElementsByTagName('p')[0]
    var Imagem = document.getElementsByTagName('img')[0]

    if(posicao.value.length == 0){
        alert('[Error] Tente novamente!')
        Imagem.src = 'Error.png'
        Imagem.title = 'Error'
    }
    else{
        if(Number(posicao.value) <= 0){
            alert('[Error] Tente novamente!')
            Imagem.src = 'Error.png'
            Imagem.title = 'Error'
        }
        else{
            var PosicaoDoAtleta = Number(posicao.value)
            switch(PosicaoDoAtleta){
                case 1:
                    msg.innerHTML = 'Excelente! Você foi o grande campeão! ;)'
                    Imagem.src = 'Ouro.png'
                    Imagem.title = 'Medalha de ouro'
                    break
                case 2:
                    msg.innerHTML = 'Parabéns! Você ficou na 2ª colocação!'
                    Imagem.src = 'Prata.png'
                    Imagem.title = 'Medalha de prata'
                    break
                case 3:
                    msg.innerHTML = 'Grande atleta! Você ficou na 3ª colocação!'
                    Imagem.src = 'Bronze.png'
                    Imagem.title = 'Medalha de bronze'
                    break
                case 4:
                    msg.innerHTML = 'Muito bom! Você ficou na 4ª colocação!'
                    Imagem.src = 'Latão.png'
                    Imagem.title = '4º lugar'
                    break
                case 5:
                    msg.innerHTML = 'Deu para o gasto! Você ficou na 5ª colocação!'
                    Imagem.src = 'Latão.png'
                    Imagem.title = '5º lugar'
                    break
                default:
                    msg.innerHTML = 'Você foi um lixo!'
                    Imagem.src = 'Fracasso.png'
                    Imagem.title = 'Fracassado(a)'
                    break
            }
        }
    }
}