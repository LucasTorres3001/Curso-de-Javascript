function triangulos(){

    var Segmento1 = document.getElementById('PrimeiroSeg')
    var Segmento2 = document.getElementById('SegundoSeg')
    var Segmento3 = document.getElementById('TerceiroSeg')
    var Resposta = document.getElementsByTagName('p')[0]
    var ImagemDoTriangulo = document.getElementsByTagName('img')[0]

    if(Segmento1.value.lenght == 0 || Segmento2.value.lenght == 0 || Segmento3.value.lenght == 0){
        Resposta.innerHTML = 'Error 404'
        ImagemDoTriangulo.src = 'Error.png'
        ImagemDoTriangulo.title = 'Error 404'
    }
    else{
        if(Number(Segmento1.value) <= 0 || Number(Segmento2.value) <= 0 || Number(Segmento3.value) <= 0){
            alert('[Error] tente novamente!')
            Resposta.innerHTML = 'Error 404'
            ImagemDoTriangulo.src = 'Error.png'
            ImagemDoTriangulo.title = 'Error 404'
        }
        else{
            var PrimeiroSegmento = Number(Segmento1.value)
            var SegundoSegmento = Number(Segmento2.value)
            var TerceiroSegmento = Number(Segmento3.value)
    
            if(PrimeiroSegmento == SegundoSegmento && SegundoSegmento == TerceiroSegmento){
                Resposta.innerHTML = 'Esses segmentos formam um triângulo EQUILÁTERO!'
                ImagemDoTriangulo.src = 'Equilatero.png'
                ImagemDoTriangulo.title = 'Triângulo Equilátero'
            }
            else if((PrimeiroSegmento < (SegundoSegmento + TerceiroSegmento) && (SegundoSegmento == TerceiroSegmento)) || (SegundoSegmento < (PrimeiroSegmento + TerceiroSegmento) && (PrimeiroSegmento == TerceiroSegmento)) || (TerceiroSegmento < (PrimeiroSegmento + SegundoSegmento) && (PrimeiroSegmento == SegundoSegmento))){
                Resposta.innerHTML = 'Esses segmentos formam um triângulo ISÓSCELES!'
                ImagemDoTriangulo.src = 'Isosceles.png'
                ImagemDoTriangulo.title = 'Triângulo Isósceles'
            }
            else if(PrimeiroSegmento < (SegundoSegmento + TerceiroSegmento) && SegundoSegmento < (PrimeiroSegmento + TerceiroSegmento) && TerceiroSegmento < (PrimeiroSegmento + SegundoSegmento)){
                Resposta.innerHTML = 'Esses segmentos formam um triângulo ESCALENO!'
                ImagemDoTriangulo.src = 'Escaleno.png'
                ImagemDoTriangulo.title = 'Triângulo Escaleno'
            }
            else{
                Resposta.innerHTML = 'Esses segmentos não são capazes de formar um triângulo!'
                ImagemDoTriangulo.src = 'PokerFace.png'
                ImagemDoTriangulo.title = 'Não formou triângulo'
            }
        }
    }
}