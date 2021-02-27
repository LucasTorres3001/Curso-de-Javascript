function tab(){

    var N = document.getElementById('num')
    var Resposta = document.getElementById('tabuada')

    if(N.value.length == 0){
        alert('[Error] Tente novamente!')
    }
    else{
        var NumDaTab = Number(N.value)
        var i = 1
        Resposta.innerHTML = ''

        while(i <= 10){
            Resposta.innerHTML += `${NumDaTab} X ${i} = ${NumDaTab*i}
            `
            i++
        }
    }
}