let individuo = {nome:'John',
genero:'M',
etnia:'branco',
peso: 72.144,
engordar(p=0){
    console.log('Engordou!')
    this.peso += p
}}

individuo.engordar(21)
console.log(`O ${individuo.nome} está pesando atualmente ${individuo.peso} kg!`)
