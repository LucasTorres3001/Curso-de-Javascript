var User = {nome: 'Lucas Terra',
etnia: 'branco',
genero: 'masculino',
Idade: 36,
peso: 16.4,
Altura: 1.81,
imc : this.peso/(this.Altura*this.Altura),
    IndiceDeMassaCorporal(p=0){
        this.peso += p
        this.imc = this.peso/(this.Altura*this.Altura)
        if(this.imc >= 0 && this.imc < 18.5){
            console.log('Você está ABAIXO do peso!')
        }
        else if(this.imc >= 18.5 && this.imc < 25){
            console.log('Você está com peso NORMAL!')
        }
        else if(this.imc >= 25 && this.imc < 30){
            console.log('Você está com SOBREPESO!')
        }
        else if(this.imc >= 30 && this.imc < 35){
            console.log('Você está com OBESIDADE GRAU 1!')
        }
        else if(this.imc >= 35 && this.imc < 40){
            console.log('Você está com OBESIDADE GRAU 2!')
        }
        else{
            if(this.imc >= 40){
                console.log('Você está com OBESIDADE GRAU 3!')
            }
        }
    }
}

User.IndiceDeMassaCorporal(114)
console.log(`Olá, o meu nome é ${User.nome}, tenho ${User.Idade} anos, sou ${User.etnia}, sou do sexo ${User.genero} e o meu IMC é de ${(User.imc).toFixed(2)} kg/m².`)