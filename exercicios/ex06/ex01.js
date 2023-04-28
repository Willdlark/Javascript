let num = [8, 7, 6, 3, 2, 5]
num.push(4)
num.sort()
console.log(num)
console.log(`O vetor tem ${num.length} posições`)
console.log(`O primeiro valor do vetor é ${num[0]}`)
let pos = num.indexOf(8)
if (pos == -1){
    console.log(`O valor não foi encontrado!`)
}else{
    console.log(`O valor desejado está na posição ${pos}`)
}







/*num.sort()
console.log(`Nosso vetor é o ${num}`)
console.log(`O vetor tem exatamente ${num.length} posições.`) 

forma não resumida
for(let pos=0;pos<num.length;pos++){
    console.log(`A posição ${pos} tem o valor ${num[pos]}`)
}
forma resumida
for(let pos in num){
    console.log(`A posição ${pos} tem o valor ${num[pos]}`)}*/