let input = document.getElementById('inpt');
let botnAdd = document.getElementById('btn');
let main = document.getElementById('arealista');
let contador = 0
function addTarefa(){
    let valorinput = input.value;
    if((valorinput !== "") && (valorinput !== null) && (valorinput !== undefined)){
        ++contador;

        let novoItem = `<div id="${contador}" class="item">
        <div class="item-icone" onclick="marcarTaf(${contador})"><span class="material-symbols-rounded" id="te${contador}">radio_button_unchecked</span></div>
        <div class="item-nome" onclick="marcarTaf(${contador})">${valorinput}</div>
        <div class="item-botao"><button class="delete" onclick="delTarefa(${contador})"><span class="material-symbols-rounded" id="pc">delete</span>Deletar</button></div>
        </div>`;
        main.innerHTML += novoItem;
        input.value = "";
        input.focus();
    }
}
function marcarTaf(id){
    var item = document.getElementById(id);
    var classe = item.getAttribute('class');
    if(classe == "item"){
        item.classList.add("clicado")
        item.parentNode.appendChild(item);
    }else{
        item.classList.remove("clicado")
    }
}

input.addEventListener("keyup", function(event){
    if(event.keyCode === 13){
        event.preventDefault();
        botnAdd.click();}})
function delTarefa(id){
    var tarefa = document.getElementById(id)
    tarefa.remove();
}

