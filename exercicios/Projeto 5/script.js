
    let num = document.getElementById('iadd')
    let lista = document.getElementById('isel')
    let res = document.getElementById('res')
    let valores = []

function isNumero(n){
    if(Number(n) >= 1 && Number(n) <= 100){
        return true
    } else{
        return false
    }

}
function inLista(n, l){
    if (l.indexof(Number(n)) != -1){
        return true
    }else{
        return false
    }
}
    
function adicionar(){
    if(isNumero(num.value) && !inLista(num.value)){
    }else{ window.alert('Valor invalido ou já encontrdo na lista.')}
}