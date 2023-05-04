function contar(){
    var ini = document.getElementById('in')
    var fim = document.getElementById('fim')
    var pas = document.getElementById('pass')
    var res = document.querySelector('div#res')
    if(ini.value.length == 0 || fim.value.length == 0 || pas.value.length == 0){ res.innerHTML = 'Impossível contar.'
    }else{
        res.innerHTML = 'Contando: '
        let i = Number(ini.value)
        let f = Number(fim.value)
        let p = Number(pas.value)
       if(i < f) 
       for(let c = i; c <= f; c += p){
            res.innerHTML +=  `${c} \u{1f449}`
        }
        else{ 
            for(let c = i; c >= f; c -= p){
            res.innerHTML +=  `${c} \u{1f449}`}

        }
        res.innerHTML += '\u{1f3c1} '
    }
}