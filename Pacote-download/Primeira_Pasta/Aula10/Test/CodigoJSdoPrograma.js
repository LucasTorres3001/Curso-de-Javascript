function mruv(){

    var VelocidadeInicial = document.getElementById('VelocidadeInicial')
    var Aceleracao = document.querySelector('input#Aceleracao')
    var Tempo = document.getElementById('TempoDeDuracao')

    var Vo = Number(VelocidadeInicial.value)
    var a = Number(Aceleracao.value)
    var t = Number(Tempo.value)
    
    var V = Vo+(a*t)

    if(Vo < 0 || t < 0){
        alert('[Error] Tente novamente!')
    }
    else{
        var ResultadoFinal = document.getElementById('VelocidadeFinal')

        ResultadoFinal.innerHTML = `A velocidade final do veiculo é de <strong>${V.toFixed(2)} m/s</strong>...</br>`

        if(V >= 0 && V < 11.111){
            ResultadoFinal.innerHTML += 'O motorista do veículo <strong>será multado</strong> por tráfegar abaixo do limite permitido!'
        }
        else if(V >= 11.111 && V < 22.222){
            ResultadoFinal.innerHTML += 'O motorista do veículo <strong>não será multado</strong> pois trafegava dentro do limite permitido!'
        }
        else{
            if(V >= 22.222){
                ResultadoFinal.innerHTML += 'O motorista do veículo <strong>será multado</strong> por tráfegar acima do limite permitido!'
            }
        }
    }
}