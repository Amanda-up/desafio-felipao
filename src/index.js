let nomeHeroi =  "Capitã Marvel"
let xpHeroi = 10.500

if(xpHeroi <= 1.000){
  xpHeroi = "Ferro"
}else if(xpHeroi >= 1.001 && xpHeroi <= 2.000){
  xpHeroi = "Bronze"
}else if(xpHeroi >= 2.001 && xpHeroi <= 5.000){
  xpHeroi = "Prata"
}else if(xpHeroi >= 6.001 && xpHeroi <= 7.000){
  xpHeroi = "Ouro"
}else if(xpHeroi >= 7.001 && xpHeroi <= 8.000){
  xpHeroi = "Platina"
}else if(xpHeroi >= 8.001 && xpHeroi <= 9.000){
  xpHeroi = "Ascendente"
}else if(xpHeroi >= 9.001 && xpHeroi <= 10.000){
  xpHeroi = "Imortal"
}else if(xpHeroi >= 10.001){
  xpHeroi = "Radiante"
}else{
console.log("Você não atingiu o número de XP Ideal")
}

console.log("O Herói: " 
            + nomeHeroi,
            "Está no Nivel: "
            + xpHeroi,
            "de XP")