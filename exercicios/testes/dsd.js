const cursos = [...document.querySelectorAll(".cursos")];
const operador = document.getElementById('op1');
const operador_2 = document.getElementById('op2');
const btn=document.querySelector("#botão1");
const btn_2=document.querySelector("#botão2");

cursos.map((el)=>{
    el.addEventListener("click",(evt)=>{
        const curso = evt.target
        curso.classList.toggle("destaque")})
})
btn.addEventListener("click",()=>{
     const cursoSelecionado=[...document.querySelectorAll(".destaque")]
     cursoSelecionado.map((el)=>{
        operador_2.appendChild(el)
     })
})
btn_2.addEventListener("click", ()=>{
    const cursoNsel= [...document.querySelectorAll(".destaque")]
    cursoNsel.map((el)=>{
        operador.appendChild(el)
    })
})