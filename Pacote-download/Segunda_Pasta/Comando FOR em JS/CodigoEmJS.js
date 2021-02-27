function aleatory(){

    var PrimeiroNumero = document.getElementById('NumAleatorio1')
    var SegundoNumero = document.getElementById('NumAleatorio2')
    var TerceiroNumero = document.getElementById('NumAleatorio3')
    var Resposta = document.getElementsByTagName('p')[0]

    if(PrimeiroNumero.value.length == 0 || SegundoNumero.value.length == 0 || TerceiroNumero.value.length == 0){
        alert('[ERROR] Tente novamente!')
    }
    else{
        var PrimeiroNum = Number(PrimeiroNumero.value)
        var SegundoNum = Number(SegundoNumero.value)
        var Passo = Number(TerceiroNumero.value)
        Resposta.innerHTML = 'Contando:</br>'

        if(Passo <= 0){
            alert('[ERROR] Tente novamente!')
        }
        if(PrimeiroNum <= SegundoNum){
            for(var N = PrimeiroNum; N <= SegundoNum; N += Passo){
                Resposta.innerHTML += ` * ${N}`
            }
        }
        else{
            for(N = PrimeiroNum; N >= SegundoNum; N -= Passo){
                Resposta.innerHTML += ` * ${N}`
            }
        }
    }
}