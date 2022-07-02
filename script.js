

console.log('hi there Luba!')

let title = document.getElementById('title')

console.log(title)
let msg = "Hello ji"
title.innerHTML= `<h1> ${msg} </h1>`

console.log(title.innerText)



// Logic for Rock Paper scissor
const squeres = document.querySelectorAll('.squere')
let playerOP = {'rock':1 ,'paper': 2 , 'scissor': 3}

function options () { 
   return Math.ceil( Math.random()*3) }

// let compOP = this.options()
// console.log(compOP)

squeres.forEach(squere => {
    
    squere.onclick = ()=>{
      console.log('you clicked', squere.value , 'player chose', playerOP[squere.value] ,'comp op', options() )

      if (playerOP[squere.value == options()]){
        console.log('It is a Tie')
        title.innerHTML= `<h1> Draw <h1>`       

      }

      if (playerOP[squere.value] == 2 && options() == 3) {
        console.log('You Lose! computer chose Scissor'  )  
        title.innerHTML= `<h1>'You Lose! computer chose Scissor<h1>`       
      } 

      if (playerOP[squere.value] == 3 && options() == 1) {
        console.log('You Lose! computer chose Rock'  ) 
        title.innerHTML= `<h1>'You Lose! computer chose Rock<h1>`
      }
     
      if (playerOP[squere.value] == 3 && options() == 2) {
        console.log('You Won! computer chose Paper'  ) 
        title.innerHTML= `<h1>You Won! computer chose Paper<h1>`       

      } 

      if (playerOP[squere.value] == 1 && options() == 3) {
        console.log('You Won! computer chose Scissor'  ) 
        title.innerHTML= `<h1> You Won! computer chose Scissor <h1>`       
      } 

      if (playerOP[squere.value] == 2 && options() == 1) {
        console.log('You Won! computer chose Scissor'  ) 
        title.innerHTML= `<h1> computer chose Rock<h1>`       

      } 

      if (playerOP[squere.value] == 1 && options() == 2) {
        console.log('You Won! computer chose Scissor'  ) 
        title.innerHTML= `<h1>You Won! computer chose paper<h1>`       

      } 
        

    }
    
});


function endGame () {
  
        title.innerText = 'Game has been ended.'
   

}

let EndGame = document.getElementById('end-game')
EndGame.onclick = () => endGame()



