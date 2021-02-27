function IdadeEGenero(){

    var AnoDeNasc = document.getElementById('AnoDeNascimentoDoUser')
    var Data = new Date()
    var AnoAtual = Data.getFullYear()
    var IdadeDoUasuario = AnoAtual - Number(AnoDeNasc.value)
    var Resposta = document.getElementsByTagName('p')[1]
    var OpcaoDeEscolhaDoUsuario = document.getElementsByName('SexoDosUsuarios')
    var SexoDoUsuario = ''
    var ImagemDoUsuario = document.getElementsByTagName('img')[0]

    if(AnoDeNasc.value.length == 0){
        Resposta.innerHTML = 'Error 404'
        ImagemDoUsuario.src = 'Error.png'
        ImagemDoUsuario.title = 'Error 404'
    }
    else{
        if(Number(AnoDeNasc.value) < 0 || Number(AnoDeNasc.value) > AnoAtual){
            alert('[Error] Tente novamente!')
            Resposta.innerHTML = 'Error 404'
            ImagemDoUsuario.src = 'Error.png'
            ImagemDoUsuario.title = 'Error 404'
        }
        else{
            if(OpcaoDeEscolhaDoUsuario[0].checked){
                SexoDoUsuario = 'Feminino'
                if(IdadeDoUasuario >= 0 && IdadeDoUasuario < 6){
                    ImagemDoUsuario.src = 'Do0Aos5Anos_F_.png'
                    ImagemDoUsuario.title ='Criança'
                }
                else if(IdadeDoUasuario >= 6 && IdadeDoUasuario <= 11){
                    ImagemDoUsuario.src = 'Dos6Aos11Anos_F_.png'
                    ImagemDoUsuario.title = 'Menina'
                }
                else if(IdadeDoUasuario > 11 & IdadeDoUasuario < 18){
                    ImagemDoUsuario.src = 'Dos12Aos17Anos_F_.png'
                    ImagemDoUsuario.title = 'Adolecente'
                }
                else if(IdadeDoUasuario >= 18 && IdadeDoUasuario <= 25){
                    ImagemDoUsuario.src = 'Dos18Aos25Anos_F_.png'
                    ImagemDoUsuario.title = 'Jovem'
                }
                else if(IdadeDoUasuario > 25 && IdadeDoUasuario <= 40){
                    ImagemDoUsuario.src = 'Dos25Anos40Anos_F_.png'
                    ImagemDoUsuario.title = 'Mulher de meia idade'
                }
                else if(IdadeDoUasuario > 40 && IdadeDoUasuario < 60){
                    ImagemDoUsuario.src = 'Dos41Aos59Anos(F).png'
                    ImagemDoUsuario.title = 'Sra.'
                }
                else{
                    if(IdadeDoUasuario >= 60){
                        ImagemDoUsuario.src = 'Dos60ParaMais(F).png'
                        ImagemDoUsuario.title = 'Idosa'
                    }
                }
                Resposta.innerHTML = `A usuária é do sexo <span>${SexoDoUsuario}</span> e tem <span>${IdadeDoUasuario}</span> anos de idade.`
            }
            else{
                if(OpcaoDeEscolhaDoUsuario[1].checked){
                    SexoDoUsuario = 'Masculino'
                    if(IdadeDoUasuario >= 0 && IdadeDoUasuario <= 5){
                        ImagemDoUsuario.src = 'Do0Aos5Anos_M_.png'
                        ImagemDoUsuario.title = 'Criança'
                    }
                    else if(IdadeDoUasuario > 5 && IdadeDoUasuario < 12){
                        ImagemDoUsuario.src = 'Dos6Aos11Anos_M_.png'
                        ImagemDoUsuario.title = 'Menino'
                    }
                    else if(IdadeDoUasuario >= 12 && IdadeDoUasuario < 18){
                        ImagemDoUsuario.src = 'Dos12Aos17Anos_M_.png'
                        ImagemDoUsuario.title = 'Adolecente'
                    }
                    else if(IdadeDoUasuario >= 18 && IdadeDoUasuario < 26){
                        ImagemDoUsuario.src = 'Dos18Aos24Anos_M_.png'
                        ImagemDoUsuario.title = 'Jovem'
                    }
                    else if(IdadeDoUasuario >= 26 && IdadeDoUasuario < 41){
                        ImagemDoUsuario.src = 'Dos25Aos40Anos(M).png'
                        ImagemDoUsuario.title = 'Homem de meia idade'
                    }
                    else if(IdadeDoUasuario >= 41 && IdadeDoUasuario < 60){
                        ImagemDoUsuario.src = 'Dos41Aos59Anos(M).png'
                        ImagemDoUsuario.title = 'Sr.'
                    }
                    else{
                        if(IdadeDoUasuario >= 60){
                            ImagemDoUsuario.src = 'Dos60ParaMais(M).png'
                            ImagemDoUsuario.title = 'Idoso'
                        }
                    }
                    Resposta.innerHTML = `O usuário é do sexo <span>${SexoDoUsuario}</span> e tem <span>${IdadeDoUasuario}</span> anos de idade.`
                }
            }
        }
    }
}