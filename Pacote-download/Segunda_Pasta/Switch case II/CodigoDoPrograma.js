function paises(){

    var opcao = document.querySelector('input#num')
    var msg = document.getElementsByTagName('p')[2]
    var ImagemDoPais = document.getElementsByTagName('img')[0]

    if(opcao.value.length == 0){
        alert('[Error] Tente novamente!')
        msg.innerHTML += 'Error 404'
        ImagemDoPais.src = 'Error.png'
        ImagemDoPais.title = 'Error'
        document.body.style.background = '#fff'
    }
    else{
        if(Number(opcao.value) <= 0){
            alert('[Error] Tente novamente!')
            msg.innerHTML += 'Error 404'
            ImagemDoPais.src = 'Error.png'
            ImagemDoPais.title = 'Error'
            document.body.style.background = '#fff'
        }
        else{
            var OpcaoDoUser = Number(opcao.value)

            switch(OpcaoDoUser){
                case 1:
                case 2:
                    msg.innerHTML = '<span>AMÉRICA DO SUL</span></br>'
                    switch(OpcaoDoUser){
                        case 1:
                            msg.innerHTML += '</br>Você selecionou a Argentina'
                            ImagemDoPais.src = 'ARG.png'
                            ImagemDoPais.title = 'Argentina'
                            document.body.style.background = 'linear-gradient(to right,#b7d5e5,#fff,#b7d5e5)'
                        break
                        case 2:
                            msg.innerHTML += '</br>Você selecionou o Uruguai'
                            ImagemDoPais.src = 'URU.png'
                            ImagemDoPais.title = 'Uruguai'
                            document.body.style.background = 'linear-gradient(to right,#00f,#fff,#00f,#fff,#00f,#fff,#00f,#fff,#00f,#fff)'
                        break
                    }
                    break
                case 3:
                case 4:
                    msg.innerHTML = '<span>AMÉRICA DO NORTE</span></br>'
                    switch(OpcaoDoUser){
                        case 3:
                            msg.innerHTML += '</br>Você selecionou o Canadá'
                            ImagemDoPais.src = 'CAN.png'
                            ImagemDoPais.title = 'Canadá'
                            document.body.style.background = 'linear-gradient(to right,#f00,#fff,#f00)'
                        break
                        case 4:
                            msg.innerHTML += '</br>Você selecionou os Estados Unidos da América'
                            ImagemDoPais.src = 'EUA.png'
                            ImagemDoPais.title = 'EUA'
                            document.body.style.background = 'linear-gradient(to right,#00f,#fff,#f00,#fff,#00f,#fff,#f00,#fff,#00f,#fff,#f00)'
                        break
                    }
                    break
                case 5:
                case 6:
                    msg.innerHTML = '<span>EUROPA</span></br>'
                    switch(OpcaoDoUser){
                        case 5:
                            msg.innerHTML += '</br>Você selecionou a Alemanha'
                            ImagemDoPais.src = 'ALE.png'
                            ImagemDoPais.title = 'Alemanha'
                            document.body.style.background = 'linear-gradient(to bottom,#000,#f00,#ff0)'
                        break
                        case 6:
                            msg.innerHTML += '</br>Você selecionou a Itália'
                            ImagemDoPais.src = 'ITA.png'
                            ImagemDoPais.title = 'Itália'
                            document.body.style.background = 'linear-gradient(to right,#0f0,#fff,#f00)'
                        break
                    }
                    break
                default:
                    msg.innerHTML = 'Opção inválida!'
                    ImagemDoPais.src = 'NoExicste.png'
                    ImagemDoPais.title = 'Opção inválida'
                    document.body.style.background = '#fff'
                break
            }
        }
    }
}