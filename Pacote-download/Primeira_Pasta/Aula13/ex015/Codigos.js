function verificar(){
    
    var FotoRepresentativaDoUsuario = document.querySelector('img#imagem')
    var data = new Date()
    var AnoAtual = data.getFullYear()
    var AnoDeNascDoUsuario = document.getElementById('txtAno')
    var Resposta = document.querySelector('div#Resposta')

    if(AnoDeNascDoUsuario.value.length == 0 || Number(AnoDeNascDoUsuario.value) > AnoAtual){
        alert('[Error] Verifique os dados e tente novamente')
    }
    else{
        var SexoDoUsuario = document.getElementsByName('Sexualidade')
        var IdadeDoUsuario = AnoAtual - Number(AnoDeNascDoUsuario.value)
        var Genero = ''

        if(SexoDoUsuario[0].checked){
            Genero = 'Masculino'
            if(IdadeDoUsuario >= 0 && IdadeDoUsuario < 10){
                //Menino
                FotoRepresentativaDoUsuario.src = 'Menino.png'
            }
            else if(IdadeDoUsuario >= 10 && IdadeDoUsuario < 24){
                //Homem jovem
                FotoRepresentativaDoUsuario.src = 'HomemJovem.png'
                FotoRepresentativaDoUsuario.title = 'Jovem'
            }
            else if(IdadeDoUsuario >= 24 && IdadeDoUsuario < 45){
                //Homem de meia idade
                FotoRepresentativaDoUsuario.src = 'HomemDeMeiaIdade.png'
                FotoRepresentativaDoUsuario.title = 'Rapaz'
            }
            else{
                //Idoso
                FotoRepresentativaDoUsuario.src = 'Idoso.png'
                FotoRepresentativaDoUsuario.title = 'Idoso'
            }
        }
        else{
            if(SexoDoUsuario[1].checked){
                Genero = 'Feminino'
                if(IdadeDoUsuario >= 0 && IdadeDoUsuario < 10){
                    //Menina
                    FotoRepresentativaDoUsuario.src = 'Menina.png'
                    FotoRepresentativaDoUsuario.title = 'Menina'
                }
                else if(IdadeDoUsuario >= 10 && IdadeDoUsuario < 24){
                    //Mulher jovem
                    FotoRepresentativaDoUsuario.src = 'MulherJovem.png'
                    FotoRepresentativaDoUsuario.title = 'Jovem'
                }
                else if(IdadeDoUsuario >= 24 && IdadeDoUsuario < 45){
                    //Mulher de meia idade
                    FotoRepresentativaDoUsuario.src = 'MulherDeMeiaIdade.png'
                    FotoRepresentativaDoUsuario.title = 'Moça'
                }
                else{
                    //Idosa
                    FotoRepresentativaDoUsuario.src = 'Idosa.png'
                    FotoRepresentativaDoUsuario.title = 'Idosa'
                }
            }
        }
        Resposta.innerHTML = `O usuário(a) do sexo ${Genero} com ${IdadeDoUsuario} anos` 
        Resposta.appendChild(FotoRepresentativaDoUsuario)
    }
}