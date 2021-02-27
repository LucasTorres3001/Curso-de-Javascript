function PedraPapelETesoura(){

    var OpcaoDoUsuario = document.getElementsByName('OpcaoDoUser')
    var Msg = document.getElementsByTagName('p')[1]
    var Imagem = document.getElementsByTagName('img')[0]
    var NumAleatorio = Math.floor(Math.random()*3)
    var Opcao = new Array('Papel','Pedra','Tesoura')
    var NomeDaOpcaoEscolhida = ''

    if(OpcaoDoUsuario[0].checked){
        NomeDaOpcaoEscolhida = 'Papel'
        Msg.innerHTML = `O usuário `
        if(NumAleatorio == 0){
            Msg.innerHTML += `jogou <span>${NomeDaOpcaoEscolhida}</span> e o P.C. jogou <span>${Opcao[NumAleatorio]}</span>!</br><span>EMPATOU!</span>`
            Imagem.src = 'Empate.png'
            Imagem.title = 'Empatou'
        }
        else if(NumAleatorio == 1){
            Msg.innerHTML += `jogou <span>${NomeDaOpcaoEscolhida}</span> e o P.C. jogou <span>${Opcao[NumAleatorio]}!</span></br><span>PARABÉNS! VOCÊ GANHOU!</span>`
            Imagem.src = 'Ganhou.png'
            Imagem.title = 'Ganhou'
        }
        else{
            if(NumAleatorio == 2){
                Msg.innerHTML += `jogou <span>${NomeDaOpcaoEscolhida}</span> e o P.C. jogou <span>${Opcao[NumAleatorio]}!</span></br><span>VOCÊ PERDEU!</span>`
                Imagem.src = 'Perdeu.png'
                Imagem.title = 'Perdeu'
            }
        }
    }
    else if(OpcaoDoUsuario[1].checked){
        NomeDaOpcaoEscolhida = 'Pedra'
        Msg.innerHTML = `O usuário `
        if(NumAleatorio == 0){
            Msg.innerHTML += `jogou <span>${NomeDaOpcaoEscolhida}</span> e o P.C. jogou <span>${Opcao[NumAleatorio]}!</span></br><span>VOCÊ PERDEU!</span>`
            Imagem.src = 'Perdeu.png'
            Imagem.title = 'Perdeu'
        }
        else if(NumAleatorio == 1){
            Msg.innerHTML += `jogou <span>${NomeDaOpcaoEscolhida}</span> e o P.C. jogou <span>${Opcao[NumAleatorio]}!</span></br><span>EMPATOU!</span>`
            Imagem.src = 'Empate.png'
            Imagem.title = 'Empatou'
        }
        else{
            if(NumAleatorio == 2){
                Msg.innerHTML += `jogou <span>${NomeDaOpcaoEscolhida}</span> e o P.C. jogou <span>${Opcao[NumAleatorio]}!</span></br><span>PARABÉNS! VOCÊ GANHOU!</span>`
                Imagem.src = 'Ganhou.png'
                Imagem.title = 'Ganhou'
            }
        }
    }
    else{
        if(OpcaoDoUsuario[2].checked){
            NomeDaOpcaoEscolhida = 'Tesoura'
            Msg.innerHTML = `O usuário `
            if(NumAleatorio == 0){
                Msg.innerHTML += `jogou <span>${NomeDaOpcaoEscolhida}</span> e o P.C. jogou <span>${Opcao[NumAleatorio]}!</span></br><span>PARABÉNS! VOCÊ GANHOU!</span>`
                Imagem.src = 'Ganhou.png'
                Imagem.title = 'Ganhou'
            }
            else if(NumAleatorio == 1){
                Msg.innerHTML += `jogou <span>${NomeDaOpcaoEscolhida}</span> e o P.C. jogou <span>${Opcao[NumAleatorio]}!</span></br><span>VOCÊ PERDEU!</span>`
                Imagem.src = 'Perdeu.png'
                Imagem.title = 'Perdeu'
            }
            else{
                if(NumAleatorio == 2){
                    Msg.innerHTML += `jogou <span>${NomeDaOpcaoEscolhida}</span> e o P.C. jogou <span>${Opcao[NumAleatorio]}!</span></br><span>EMPATOU!</span>`
                    Imagem.src = 'Empate.png'
                    Imagem.title = 'Empatou'
                }
            }
        }
    }
}