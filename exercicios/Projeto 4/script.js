function gerar(){
    var num = document.getElementById('inum')
    var tab = document.getElementById('isel')
    if(num.value.length == 0){
        window.alert('Digite um número')
    }else{
        let n = Number(num.value)
        let c = 1
        tab.innerHTML = ''
        while(c <= 15){
            let item = document.createElement('option')
            item.text = `${n} x ${c} = ${n*c}`
            item.value = `tab${c}`
            tab.appendChild(item)
            c++
        }
    }    
}
