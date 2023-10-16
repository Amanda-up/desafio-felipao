let nomeHeroi =  "Capitã Marvel"
let xpHeroi = 4.002

if(xpHeroi <= 1.000){
console.log("Ferro")
}else if(xpHeroi >= 1.001 && xpHeroi <= 2.000){
console.log("Bronze")
}else if(xpHeroi >= 2.001 && xpHeroi <= 5.000){
    console.log("Prata")
}else if(xpHeroi >= 6.001 && xpHeroi <= 7.000){
    console.log("Ouro")
}else if(xpHeroi >= 7.001 && xpHeroi <= 8.000){
    console.log("Platina")
}else if(xpHeroi >= 8.001 && xpHeroi <= 9.000){
    console.log("Ascendente")
}else if(xpHeroi >= 9.001 && xpHeroi <= 10.000){
    console.log("Imortal")
}else if(xpHeroi >= 10.001){
    console.log("Radiante")
}else{
console.log("Você comeria mais que o pica pau")
}

console.log("O Herói :" + nomeHeroi , "está no nível de :" + xpHeroi "de XP")