function carregar(){
    var msg = window.document.getElementById('p')
    var img = window.document.getElementById('img')
    var data = new Date()
    //var hora = data.getHours()
    var hora = 4
    msg.innerHTML = `Agora são ${hora} horas.`
    if(hora >= 6 && hora < 12){ 
        img.src = 'fotomanha.png'
        document.body.style.background = 'rgb(124, 124, 2)'
    }else if(hora >= 12 && hora < 18){
        img.src = 'fototarde.png'
        document.body.style.background = 'rgba(15, 109, 15, 0.856)'
    }else if(hora > 17 && hora < 0){
        img.src = 'fotonoite.png'
        document.body.style.background = 'rgb(19, 100, 175)'
    }else if(hora >= 0 && hora < 6){
        img.src = 'fotomadruga.png'
        document.body.style.background = 'blueviolet'
    }
}