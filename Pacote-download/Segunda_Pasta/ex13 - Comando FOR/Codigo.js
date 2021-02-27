function uol(){

    var NumAleatorio1 = document.getElementById('NumeroAleatorio')
    var NumAleatorio2 = document.getElementById('NumeroAleatorio2')
    var NumAleatorio3 = document.getElementById('NumeroAleatorio3')
    var Resposta = document.getElementsByTagName('p')[0]

    if(NumAleatorio1.value.length == 0 || NumAleatorio2.value.length == 0 || NumAleatorio3.value.length == 0){
        alert('[Error] Tente novamente!')
        Resposta.innerHTML = 'Error 404 :('
    }
    else{
        Resposta.innerHTML = 'Contando:</br>'
        var NumInicial = Number(NumAleatorio1.value)
        var NumFinal = Number(NumAleatorio2.value)
        var Passo = Number(NumAleatorio3.value)

        if(Passo <= 0){
            alert('[Error] Tente novamente!')
        }
        if(NumInicial <= NumFinal){
            for(var Num = NumInicial; Num <= NumFinal; Num += Passo){
                Resposta.innerHTML += `\u{1F449} ${Num}`
            }
        }
        else{
            for(Num = NumInicial; Num >= NumFinal; Num -= Passo){
                Resposta.innerHTML += `\u{1F449} ${Num}`
            }
        }
    }
}