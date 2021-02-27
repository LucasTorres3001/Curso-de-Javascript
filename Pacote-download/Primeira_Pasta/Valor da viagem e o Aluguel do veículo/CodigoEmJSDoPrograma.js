function result(){

    var Resposta = document.getElementsByTagName('p')[0]
    var DistanciaPercorrida = document.getElementById('DistanciaPercorridaPeloVeiculo')
    var AluguelDoVeiculo1 = document.getElementById('OAluguelDaDiariaDoVeiculo')
    var Imagem = document.getElementsByTagName('img')[0]
    
    if(DistanciaPercorrida.value.length == 0 || AluguelDoVeiculo1.value.length == 0){
        Resposta.innerHTML = 'Error 404'
        Imagem.src = 'Error.png'
        Imagem.title = 'Error 404'
    }
    else{
        if(Number(DistanciaPercorrida.value) < 0 || Number(AluguelDoVeiculo1.value) < 0){
            alert('[Error] Tente novamente!')
            Resposta.innerHTML = 'Error 404'
            Imagem.src = 'Error.png'
            Imagem.title = 'Error 404'
        }
        else{
            var DistanciaPercorridaPeloVeiculo = Number(DistanciaPercorrida.value)
            var AluguelDoVeiculo = Number(AluguelDoVeiculo1.value)
    
            if(DistanciaPercorridaPeloVeiculo >= 0 && AluguelDoVeiculo >= 0){
                Resposta.innerHTML = `O motorista alugou um veículo por ${AluguelDoVeiculo} dia(s) e a distância percorrida por ele foi de ${DistanciaPercorridaPeloVeiculo} km.
                Portanto, o motorista terá que pagar ${(AluguelDoVeiculo*60).toLocaleString('pt-BR',{style: 'currency',currency: 'BRL'})} reais de aluguel e mais ${(DistanciaPercorridaPeloVeiculo*(15/100)).toLocaleString('pt-BR',{style: 'currency',currency: 'BRL'})} reais pela
                distância percorrida durante a viagem.`
                Imagem.src = 'viagem.png'
                Imagem.title = 'Viagem'
            }
        }
    }
}