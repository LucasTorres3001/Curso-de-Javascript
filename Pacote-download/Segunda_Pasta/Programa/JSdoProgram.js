function FuNcAo(){

    var OpcoesDoUsuario = document.getElementsByName('Opcao')
    var Msg = document.getElementsByTagName('p')[2]
    var Imagem = document.getElementsByTagName('img')[0]
    var NomeDaOpcaoEscolhida=''

    if(OpcoesDoUsuario[0].checked){
        NomeDaOpcaoEscolhida='Arroz'
        Msg.innerHTML = `<span>CEREAL!</span></br></br>O usuário escolheu o <span>${NomeDaOpcaoEscolhida}</span>`
        Imagem.src = 'Arroz.png'
        Imagem.title = 'Arroz'
    }
    else if(OpcoesDoUsuario[1].checked){
        NomeDaOpcaoEscolhida='Milho'
        Msg.innerHTML = `<span>CEREAL!</span></br></br>O usuário escolheu o <span>${NomeDaOpcaoEscolhida}</span>.`
        Imagem.src = 'Milho.png'
        Imagem.title = 'Milho'
    }
    else{
        if(OpcoesDoUsuario[2].checked){
            NomeDaOpcaoEscolhida='Castanha-do-Pará'
            Msg.innerHTML = `<span>OLEAGINOSAS!</span></br></br>O usuário escolheu o <span>${NomeDaOpcaoEscolhida}</span>.`
            Imagem.src = 'Castanha-do-Para.png'
            Imagem.title = 'Castanha-do-Pará'
        }
        else if(OpcoesDoUsuario[3].checked){
            NomeDaOpcaoEscolhida='Castanha-de-Cajú'
            Msg.innerHTML = `<span>OLEAGINOSAS</span>!</br></br>O usuário escolheu o <span>${NomeDaOpcaoEscolhida}</span>.`
            Imagem.src = 'Castanha-de-Caju.png'
            Imagem.title = 'Castanha-de-Cajú'
        }
        else{
            if(OpcoesDoUsuario[4].checked){
                NomeDaOpcaoEscolhida='Grão-de-bico'
                Msg.innerHTML = `<span>LEGUMINOSAS!</span></br></br>O usuário escolheu o <span>${NomeDaOpcaoEscolhida}</span>.`
                Imagem.src = 'Grao-de-bico.png'
                Imagem.title = 'Grão-de-bico'
            }
            else if(OpcoesDoUsuario[5].checked){
                NomeDaOpcaoEscolhida='Feijões'
                Msg.innerHTML = `<span>LEGUMINOSAS!</span></br></br>O usuário escolheu os <span>${NomeDaOpcaoEscolhida}</span>.`
                Imagem.src = 'Feijao.png'
                Imagem.title = 'Feijões'
            }
            else{
                if(OpcoesDoUsuario[6].checked){
                    NomeDaOpcaoEscolhida='Pizza'
                    Msg.innerHTML = `<span>MASSA!</span></br></br>O usuário escolheu o <span>${NomeDaOpcaoEscolhida}</span>.`
                    Imagem.src = 'Pizza.png'
                    Imagem.title = 'Pizza'
                }
                else{
                    if(OpcoesDoUsuario[7].checked){
                        NomeDaOpcaoEscolhida='Pães'
                        Msg.innerHTML = `<span>MASSA!</span></br></br>O usuário escolheu os <span>${NomeDaOpcaoEscolhida}</span>.`
                        Imagem.src = 'Paes.png'
                        Imagem.title = 'Pães'
                    }
                }
            }
        }
    }
}