function carregar(){

    var NomeDoUsuario = prompt('Identifique-se:','Nome do usuário')

    var mensagem = document.getElementsByTagName('div')[0]
    var fotos = document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()

    mensagem.innerHTML = `Agora são ${hora} hora(s).`

    if(hora >= 0 && hora < 12){
        alert(`Bom dia, ${NomeDoUsuario}`)
        fotos.src = 'Manhã.png'
    }
    else if(hora >= 12 && hora < 19){
        fotos.src = 'Tarde.png'
        fotos.title = 'Imagem da tarde'
        document.body.style.background = '#eead0e'
        alert(`Boa tarde, ${NomeDoUsuario}`)
    }
    else{
        fotos.src = 'Noite.png'
        fotos.title = 'Imagem da noite'
        document.body.style.background = '#2c2c2c'
        alert(`Boa noite, ${NomeDoUsuario}`)
    }
}