var texto = document.getElementById('itext');
var botaoadd = document.getElementById('botao');
let main = getElementById('iitem');
function addtaf(){
    let textovalue = texto.value;
    if((textovalue !== "") && (textovalue !== null) && (textovalue !== undefined)){
      let novoItem = `<div class="item">
      <div class="icon"><span class="material-symbols-outlined">
          radio_button_unchecked
          </span></div>
      <div class="tarefa">texto</div>
      <button class="del">Deletar tarefa</button>
  </div>`;
  main.innerHTML += novoItem;
  

    }
}