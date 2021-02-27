let num = document.querySelector('input#fnum')
let lista = document.querySelector('select#Lista')
let Res = document.getElementsByTagName('p')[0]
let valores = []

function john(n){
    if(Number(n) >= 1 && Number(n) <= 100){
        return true
    }
    else{
        return false
    }
}

function bob(n, l){
    if(l.indexOf(Number(n)) != -1){
        return true
    }
    else{
        return false
    }
}

function adicionar(){
    if(john(num.value) && !bob(num.value, valores)){
        valores.push(Number(num.value))
        let itens = document.createElement('option')
        itens.text = `Valor ${num.value} adicionado.`
        lista.appendChild(itens)
    }
    else{
        alert('[Error] Valor já encontrado na lista!')
    }
    num.value = ''
    num.focus()
}

function finalizar(){
    if(valores.length == 0){
        alert('Digite um número antes de finalizar!')
    }
    else{
        let total = valores.length
        let maior = valores[0]
        let menor = valores[0]
        for(var posicao in valores){
            if(valores[posicao] > maior){
                maior = valores[posicao]
            }
            else{
                if(menor < valores[posicao]){
                    menor = valores[posicao]
                }
            }
        }

        Res.innerHTML = ''
        Res.innerHTML += `Ao todo tivemos ${total} números cadastrados.`
        Res.innerHTML = `O maior valor digita foi o número ${maior}</br>e o menor valor digitado foi o número ${menor}.`
    }
}