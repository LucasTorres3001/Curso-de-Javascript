function aleatoria(){

    var VelocidadeDoVeiculo1 = document.getElementById('VelocidadeDoVeiculo')
    var Cout = document.getElementsByTagName('p')[0]
    var Imagem = document.getElementsByTagName('img')[0]

    if(VelocidadeDoVeiculo1.value.length == 0){
        Cout.innerHTML = 'Error 404'
        Imagem.src = 'Error.png'
        Imagem.title = 'Error 404'
    }
    else{
        if(Number(VelocidadeDoVeiculo1.value) < 0){
            alert('[Error] Tente novamente!')
            Cout.innerHTML = 'Error 404'
            Imagem.src = 'Error.png'
            Imagem.title = 'Error 404'
        }
        else{
            var VelocidadeDoVeiculo = Number(VelocidadeDoVeiculo1.value)

            Cout.innerHTML = `O motorista do veículo está a uma velocidade de <strong>${VelocidadeDoVeiculo} km/h</strong>. `

            if(VelocidadeDoVeiculo >= 0 && VelocidadeDoVeiculo < 40){
                Cout.innerHTML += `Portanto, ele terá que pagar uma multa no valor de ${((40-VelocidadeDoVeiculo)*(65/10)).toLocaleString('pt-BR',{style: 'currency',currency: 'BRL'})} reais`
                Imagem.src = 'Multa.png'
                Imagem.title = 'Você foi multado'
                alert('Motorista trafegando abaixo do limite permitido!')
            }
            else if(VelocidadeDoVeiculo >= 40 && VelocidadeDoVeiculo < 81){
                Cout.innerHTML += `Portanto, ele não será multado!`
                Imagem.src = 'Parabens.png'
                Imagem.title = 'Você não foi multado'
                alert('Motorista trafegando dentro do limite permitido!')
            }
            else{
                Cout.innerHTML += `Portanto, ele terá que pagar uma multa no valor de ${((VelocidadeDoVeiculo-80)*(65/10)).toLocaleString('pt-BR',{style: 'currency',currency: 'BRL'})} reais`
                Imagem.src = 'Multa.png'
                Imagem.title = 'Você foi multado'
                alert('Motorista trafegando acima do limite permitido!')
            }
        }
    }
}