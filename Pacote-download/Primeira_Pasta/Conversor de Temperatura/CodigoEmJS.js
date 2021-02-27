function convertendo(){

    var TemperaturaEmGrausCelsius = document.getElementById('TemperaturaEmGrauCelsius')
    var Resposta = document.getElementsByTagName('p')[1]
    var Imagem = document.getElementsByTagName('img')[0]
    var OpcaoDaTemperaturaDisponivelParaoUsuario = document.getElementsByName('EscolhaDaTemperaturaFeitaPeloUsuario')
    var TemperaturaEscolhida = ''
    var Conversor
    var SiglaDaTemperatura = ''

    if(TemperaturaEmGrausCelsius.value.length == 0){
        Resposta.innerHTML = 'Error 404'
        Imagem.src = 'Error.png'
        Imagem.title = 'Error 404'
    }
    else{
        if(OpcaoDaTemperaturaDisponivelParaoUsuario[0].checked){
            TemperaturaEscolhida = 'Fahrenhait'
            Conversor = ((Number(TemperaturaEmGrausCelsius.value)*18)/10)+32
            SiglaDaTemperatura = ' F'
            Imagem.src = 'Termometro1.png'
            Imagem.title = 'Conversão de Celsius para Fahrenhait'
        }
        else{
            if(OpcaoDaTemperaturaDisponivelParaoUsuario[1].checked){
                TemperaturaEscolhida = 'Kelvin'
                Conversor = Number(TemperaturaEmGrausCelsius.value)+273
                SiglaDaTemperatura = ' K'
                Imagem.src = 'Termometro2.png'
                Imagem.title = 'Conversão de Celsius para Kelvin'
            }
        }
        Resposta.innerHTML = `A conversão de <span>${Number(TemperaturaEmGrausCelsius.value)} ºC</span> para ${TemperaturaEscolhida} é <span>${Conversor}${SiglaDaTemperatura}</span>`
    }
}