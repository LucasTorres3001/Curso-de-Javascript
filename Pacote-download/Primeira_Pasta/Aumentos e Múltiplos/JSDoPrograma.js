function salario(){

    var ValorDoSalario = document.getElementById('SalarioDoFuncionario')
    var Resposta = document.getElementsByTagName('p')[0]
    var SalarioDoUsuario = Number(ValorDoSalario.value)

    if(SalarioDoUsuario <= 0){
        alert('[Error] Tente novamente!')
    }
    else{
        if(SalarioDoUsuario > 0 && SalarioDoUsuario <= 1250){
            Resposta.innerHTML = `PARABÉNS, seu patrão em um determinado momento da empresa vai te dar um aumento de <span>15%</span>. Portanto, o seu salário passa a ser de 
            <span>R$ ${SalarioDoUsuario*(115/100).toFixed(2)} reais</span>.`
        }
        else{
            if(SalarioDoUsuario > 1250){
                Resposta.innerHTML = `PARABÉNS, seu patrão em um determinado momento da empresa vai te dar um aumento de <span>10%</span>. Portanto, o seu salário passa a ser de 
                <span>R$ ${SalarioDoUsuario*(11/10).toFixed(2)} reais</span>.`
            }
        }
    }
}