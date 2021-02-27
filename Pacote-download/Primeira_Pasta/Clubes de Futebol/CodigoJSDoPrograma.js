function clubes(){

    var QntdDeLiberta = document.getElementById('Qntd.DeCopaLibertadoresDaAmerica')
    var Data = new Date()
    var AnoAtual = Data.getFullYear()
    var IdadeDoClube
    var Resposta = document.getElementsByTagName('p')[1]
    var ImagemDoEscudoDoClube = document.getElementsByTagName('img')[0]
    var OpcaoDeClubesDoUsuario = document.getElementsByName('txtnum')
    var NomeDoClube = ''
    var DiaDaFundacaoDoClube
    var MesDaFundacaoDoClube = ''
    var AnoDaFundacaoDoClube

    if(QntdDeLiberta.value.length == 0){
        Resposta.innerHTML = 'Error 404'
        ImagemDoEscudoDoClube.src = 'Error.png'
        ImagemDoEscudoDoClube.title = 'Error 404'
    }
    else{
        if(Number(QntdDeLiberta.value) < 0 || Number(QntdDeLiberta.value) > 3){
            alert('[Error] Tente novamente!')
            Resposta.innerHTML = 'Error 404'
            ImagemDoEscudoDoClube.src = 'Error.png'
            ImagemDoEscudoDoClube.title = 'Error 404'
        }
        else{
            var QntdDeCopaLibertadoresDaAmericaDoClube = Number(QntdDeLiberta.value)
    
            if(OpcaoDeClubesDoUsuario[0].checked && QntdDeCopaLibertadoresDaAmericaDoClube == 1){
                NomeDoClube = 'Sport Club Corinthians Paulista'
                DiaDaFundacaoDoClube = 1
                MesDaFundacaoDoClube = 'Setembro'
                AnoDaFundacaoDoClube = 1910
                IdadeDoClube = AnoAtual - AnoDaFundacaoDoClube
                Resposta.innerHTML = `O clube selecionado pelo usuário foi o <span>${NomeDoClube}</span>, fundado em <span>${DiaDaFundacaoDoClube} de ${MesDaFundacaoDoClube} de ${AnoDaFundacaoDoClube}</span>.</br>O clube tem <span>${IdadeDoClube}</span> anos de existência e o clube foi campeão apenas <span>${QntdDeCopaLibertadoresDaAmericaDoClube}</span> única vez da Copa Libertadores da América em toda sua história.`
                ImagemDoEscudoDoClube.src = 'SCCP.png'
                ImagemDoEscudoDoClube.title = 'SC Corinthians P'
                document.body.style.background = 'linear-gradient(to top,#000,#fff)'
            }
            else if(OpcaoDeClubesDoUsuario[0].checked && QntdDeCopaLibertadoresDaAmericaDoClube != 1){
                alert('Tente novamente!')
            }
            else{
                if(OpcaoDeClubesDoUsuario[1].checked && QntdDeCopaLibertadoresDaAmericaDoClube == 2){
                    NomeDoClube = 'Sociedade Esportiva Palmeiras'
                    DiaDaFundacaoDoClube = 26
                    MesDaFundacaoDoClube = 'Agosto'
                    AnoDaFundacaoDoClube = 1914
                    IdadeDoClube = AnoAtual - AnoDaFundacaoDoClube
                    Resposta.innerHTML = `O clube selecionado pelo usuário foi a <span>${NomeDoClube}</span>, fundado em <span>${DiaDaFundacaoDoClube} de ${MesDaFundacaoDoClube} de ${AnoDaFundacaoDoClube}</span>.</br>O clube tem <span>${IdadeDoClube}</span> anos de existência e o clube foi campeão <span>${QntdDeCopaLibertadoresDaAmericaDoClube}</span> vezes da Copa Libertadores da América em toda sua história.`
                    ImagemDoEscudoDoClube.src = 'SEP.png'
                    ImagemDoEscudoDoClube.title = 'SE Palmeiras'
                    document.body.style.background = 'linear-gradient(to left,#0f0,#fff)'
                }
                else if(OpcaoDeClubesDoUsuario[1].checked && QntdDeCopaLibertadoresDaAmericaDoClube != 2){
                    alert('Tente novamente!')
                }
                else{
                    if(OpcaoDeClubesDoUsuario[2].checked && QntdDeCopaLibertadoresDaAmericaDoClube == 3){
                        NomeDoClube = 'Santos Futebol Clube'
                        DiaDaFundacaoDoClube = 14
                        MesDaFundacaoDoClube = 'Abril'
                        AnoDaFundacaoDoClube = 1912
                        IdadeDoClube = AnoAtual - AnoDaFundacaoDoClube
                        Resposta.innerHTML = `O clube selecionado pelo usuário foi o <span>${NomeDoClube}</span>, fundado em <span>${DiaDaFundacaoDoClube} de ${MesDaFundacaoDoClube} de ${AnoDaFundacaoDoClube}</span>.</br>O clube tem <span>${IdadeDoClube}</span> anos de existência e o clube foi campeão <span>${QntdDeCopaLibertadoresDaAmericaDoClube}</span> vezes da Copa Libertadores da América em toda sua história.`
                        ImagemDoEscudoDoClube.src = 'SFC.png'
                        ImagemDoEscudoDoClube.title = 'Santos FC'
                        document.body.style.background = 'linear-gradient(to bottom,#000,#fff)'
                    }
                    else if(OpcaoDeClubesDoUsuario[2].checked && QntdDeCopaLibertadoresDaAmericaDoClube != 3){
                        alert('Tente novamente!')
                    }
                    else{
                        if(OpcaoDeClubesDoUsuario[3].checked && QntdDeCopaLibertadoresDaAmericaDoClube == 3){
                            NomeDoClube = 'São Paulo Futebol Clube'
                            DiaDaFundacaoDoClube = 25
                            MesDaFundacaoDoClube = 'Janeiro'
                            AnoDaFundacaoDoClube = 1930
                            IdadeDoClube = AnoAtual - AnoDaFundacaoDoClube
                            Resposta.innerHTML = `O clube selecionado pelo usuário foi o <span>${NomeDoClube}</span>, fundado em <span>${DiaDaFundacaoDoClube} de ${MesDaFundacaoDoClube} de ${AnoDaFundacaoDoClube}</span>.</br>O clube tem <span>${IdadeDoClube}</span> anos de existência e o clube foi campeão <span>${QntdDeCopaLibertadoresDaAmericaDoClube}</span> vezes da Copa Libertadores da América em toda sua história.`
                            ImagemDoEscudoDoClube.src = 'SPFC.png'
                            ImagemDoEscudoDoClube.title = 'São Paulo FC'
                            document.body.style.background = 'linear-gradient(to left,#000,#fff,#f00)'
                        }
                        else{
                            if(OpcaoDeClubesDoUsuario[3].checked && QntdDeCopaLibertadoresDaAmericaDoClube != 3){
                                alert('Tente novamente!')
                            }
                        }
                    }
                }
            }
        }
    }
}