function mu(){

    var EspacoInicial = document.getElementById('EspacoInicial')
    var VelocidadeMedia = document.querySelector('input#VelocidadeMedia')
    var Tempo = document.getElementById('TempoDeDuracao')

    var So = Number(EspacoInicial.value)
    var V = Number(VelocidadeMedia.value)
    var t = Number(Tempo.value)

    var S = So+(V*t)

    if(V < 0 || t < 0){
        alert('[Error] Tente novamente!')
    }
    else{
        var EspacoFinal = document.getElementsByTagName('p')[0]

        EspacoFinal.innerHTML = `A posição final desse veículo é <strong>${S} m</strong> depois.`
    }
}