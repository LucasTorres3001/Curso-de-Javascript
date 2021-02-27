function moedas(){

    var Nacional = document.getElementById('ValorEmReais')
    var OpcaoDoUser = document.getElementsByName('MoedasEstrangeiras')
    var ImagemDaMoeda = document.getElementsByTagName('img')[0]
    var Resposta = document.getElementsByTagName('p')[1]

    if(Nacional.value.length == 0){
        Resposta.innerHTML = 'Error 404'
        ImagemDaMoeda.src = 'Error.png'
        ImagemDaMoeda.title = 'Error 404'
    }
    else{
        if(Number(Nacional.value) < 0){
            alert('[ERROR] Tente novamente!')
            Resposta.innerHTML = 'Error 404'
            ImagemDaMoeda.src = 'Error.png'
            ImagemDaMoeda.title = 'Error 404'
        }
        else{
            var Real = Number(Nacional.value)
            var NomeDaMoeda = ''
            var Dolar = (Real*100)/544
            var Euro = (Real*100)/651
            var Libra = (Real*100)/744
            
            if(OpcaoDoUser[0].checked){
                NomeDaMoeda = 'Dólar americano'
                Resposta.innerHTML = `Convertendo <span>${Real.toLocaleString('pt-BR',{style: 'currency',currency: 'BRL'})}</span> reais para ${NomeDaMoeda} fica em um valor de <span>${Dolar.toLocaleString('pt-BR',{style: 'currency',currency: 'USD'})}</span> dólares.`
                ImagemDaMoeda.src = 'Dolar.png'
                ImagemDaMoeda.title = 'Dólar americano'
            }
            else if(OpcaoDoUser[1].checked){
                NomeDaMoeda = 'Euro'
                Resposta.innerHTML = `Convertendo <span>${Real.toLocaleString('pt-BR',{style: 'currency',currency: 'BRL'})}</span> reais para ${NomeDaMoeda} fica em um valor de <span>${Euro.toLocaleString('pt-BR',{style: 'currency',currency: 'EUR'})}</span> euros.`
                ImagemDaMoeda.src = 'Euro.png'
                ImagemDaMoeda.title = 'Euro'
            }
            else{
                if(OpcaoDoUser[2].checked){
                    NomeDaMoeda = 'Libra esterlina'
                    Resposta.innerHTML = `Convertendo <span>${Real.toLocaleString('pt-BR',{style: 'currency',currency: 'BRL'})}</span> reais para ${NomeDaMoeda} fica em um valor de <span>${Libra.toLocaleString('pt-BR',{style: 'currency',currency: 'GBP'})}</span> libras esterlinas.`
                    ImagemDaMoeda.src = 'Libra.png'
                    ImagemDaMoeda.title = 'Libra esterlina'
                }
            }
        }
    }
}