function clicou(){

    var NomeDoUsusario = prompt('Identifique-se:','Digite seu nome')
    var ImagemDaFormaFisicaDoUsuario = document.getElementById('Peso')
    var MassaDoUsuario = document.getElementById('txtnI')
    var AlturaDoUsuario = document.querySelector('input#txtnII')

    var kg = Number(MassaDoUsuario.value)
    var m = Number(AlturaDoUsuario.value)

    var IMCDoUsuario = kg/(m*m)

    if(kg < 0 || m < 0){
        alert('[Error] tente novamente!')
    }
    else{
        var CalculoDoIMC = document.getElementById('Calculo')
        
        CalculoDoIMC.innerHTML = `O I.M.C. desse usuário é de <strong>${IMCDoUsuario.toFixed(2)} kg/m²</strong> ...</br>`

        if(IMCDoUsuario >= 0 && IMCDoUsuario < 18.5){
            //ABAIXO DO PESO!
            ImagemDaFormaFisicaDoUsuario.src = 'AbaixoDoPeso.png'
            alert(`${NomeDoUsusario}, você está abaixo do peso!`)
        }
        else if(IMCDoUsuario >= 18.5 && IMCDoUsuario < 25){
            //PESO NORMAL!
            ImagemDaFormaFisicaDoUsuario.src = 'PesoCorreto.png'
            ImagemDaFormaFisicaDoUsuario.title = 'Peso normal'
            alert(`${NomeDoUsusario}, você está dentro do peso normal!`)
        }
        else if(IMCDoUsuario >= 25 && IMCDoUsuario < 30){
            //SOBREPESO!
            ImagemDaFormaFisicaDoUsuario.src = 'Sobrepeso.png'
            ImagemDaFormaFisicaDoUsuario.title = 'Sobrepeso'
            alert(`${NomeDoUsusario}, você está com sobrepeso!`)
        }
        else if(IMCDoUsuario >= 30 && IMCDoUsuario < 35){
            //OBESIDADE GRAU 1
            ImagemDaFormaFisicaDoUsuario.src = 'Obesidade1.png'
            ImagemDaFormaFisicaDoUsuario.title = 'Obesidade grau 1'
            alert(`${NomeDoUsusario}, você está com obesidade grau 1`)
        }
        else if(IMCDoUsuario >= 35 && IMCDoUsuario < 40){
            //OBESIDADE GRAU 2
            ImagemDaFormaFisicaDoUsuario.src = 'Obesidade2.png'
            ImagemDaFormaFisicaDoUsuario.title = 'Obesidade grau 2'
            alert(`${NomeDoUsusario}, você está com obesidade grau 2`)
        }
        else{
            //OBESIDADE GRAU 3
            ImagemDaFormaFisicaDoUsuario.src = 'Obesidade3.png'
            ImagemDaFormaFisicaDoUsuario.title = 'Obesidade grau 3'
            alert(`${NomeDoUsusario}, você está com obesidade grau 3`)
        }
    }
    CalculoDoIMC.appendChild(ImagemDaFormaFisicaDoUsuario)
}