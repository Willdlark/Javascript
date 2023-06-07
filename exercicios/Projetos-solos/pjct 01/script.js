let texto = document.getElementById('itext');
let botaoadd = document.getElementById('botao');
let main = document.getElementById('iitem');
let contador = 0
function addtaf(){
    let textovalue = texto.value;
    if((textovalue != "") && (textovalue != null) && (textovalue != undefined)){
        ++contador;
      let novoItem = `<div class="item" id="${contador}">
      <div class="icon"><span class="material-symbols-outlined">
          radio_button_unchecked
          </span></div>
      <div class="tarefa")>${textovalue}</div>
      <button class="del" onclick="deltaf(${contador})">Deletar tarefa</button>
  </div>`;
  main.innerHTML += novoItem
  texto.value = "";
  texto.focus();}
}
function deltaf(id){
    let tarefa = document.getElementById(id)
    tarefa.remove()
}

