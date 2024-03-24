

const result = document.querySelector(".result")

const humanScore =document.querySelector("#human-score")
const machineScore =document.querySelector("#machine-score")

let humanScoreNumber = 0
let machineScoreNuuber= 0

const playHuman =( humanChoice) => {
        playtheGame( humanChoice,playMachine())
 }

 const playMachine = () => {
                const choices = ["rock",'paper', "scissors" ]
    const randomNumber = Math.floor(Math.random() * 3)
                
    return choices[randomNumber]
 }

 const playtheGame =( human ,machine) => {
    console.log ("humano" + human + "Maquina: " + machine)

    if ( human === machine) {
        result.innerHTML = "deu empate!"
    }
    else if( ( human ==="paper" && machine === "rock") ||
     ( human ==="rock" && machine === "scissors") ||
     ( human ==="rock" && machine === "scissors") 
     )
   { humanScoreNumber++
      humanScore.innerHTML = humanScoreNumber
       result.innerHTML ="você ganhou "
   }
 else{ machineScoreNuuber++
   machineScore.innerHTML=machineScoreNuuber
   result.innerHTML= "voce perdeu para alexa"
 }
}