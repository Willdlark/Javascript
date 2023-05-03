function verificar(){
var data = new Date()
var ano = data.getFullYear()
var fano = document.getElementById('year')
var res = document.querySelector('div#res')
if(fano.value.length == 0 || fano.value > ano){
    window.alert('[Erro] Verifique os dados e tente novamente!')
} else{
    var fsex = document.getElementsByName('xsex')
    var idade = ano - Number(fano.value)
    var genero = ''
    var img = document.createElement('img')
    img.setAttribute('id', 'foto')
    if (fsex[0].checked){
        genero = 'um Homem'
        if(idade >=0 && idade < 10){
            img.setAttribute('src', 'Criança H.png')
        }else if(idade < 21){
            img.setAttribute('src', 'Jovem-H.png')
        }else if(idade < 50){
            img.setAttribute('src', 'Homem.png')
        }else if(idade < 100){
            img.setAttribute('src', 'Idoso-H.png')
        }else{
            img.setAttribute('src', 'pexels-photo-1528375.png') 
        }
    }else if(fsex[1].checked){
        genero = 'uma Mulher'
        if(idade >=0 && idade < 10){
            img.setAttribute('src', 'Criança-M.jpg') 
        }else if(idade < 21){
            img.setAttribute('src', 'jovem-M.png') 
        }else if(idade < 50){
            img.setAttribute('src', 'Adulto- M.png') 
        }else if(idade < 100){
            img.setAttribute('src', 'Idoso-M.png') 
        }else{
            img.setAttribute('src', 'pexels-photo-1528375.png') 
        }
    }
    res.style.textAlign = 'center'
    res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
    res.appendChild(img)
}
}