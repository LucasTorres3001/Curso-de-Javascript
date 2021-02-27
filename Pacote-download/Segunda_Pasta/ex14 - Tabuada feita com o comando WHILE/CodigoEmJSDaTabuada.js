function a(){

    var NumDaTabuada = document.getElementById('NumeroEscolhidoDeFormaAleatoriaPeloUsuario')
    var NumDaTabuada2 = document.getElementById('OutroNumAleatorio')
    var Resposta = document.querySelector('textarea#num')

    if(NumDaTabuada.value.length == 0 || NumDaTabuada2.value.length == 0){
        alert('[ERROR] Tente novamente!')
    }
    else{
        var Numero = Number(NumDaTabuada2.value)

        if(Numero < 0){
            alert('[ERROR] Number native invalid!')
        }
        else{
            var NumeroDaTabuada = Number(NumDaTabuada.value)
            var c = 1
            Resposta.innerHTML = ''
    
            while(c <= Numero){
                Resposta.innerHTML += `${NumeroDaTabuada} x ${c} = ${NumeroDaTabuada*c}
                `
                c++
            }
        }
    }
}