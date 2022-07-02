let redSquere = document.getElementById('redSquere')
redSquere.onclick= () =>{
    console.log('you clicked RED')
}

let blueSquere = document.getElementById('blueSquere')
blueSquere.onclick = ()=> {
    console.log('You cliked Blue.')
}

let greenSquere = document.getElementById('greenSquere')
greenSquere.onclick = ()=> {
    console.log('You cliked green.')
}

const squeres = document.querySelectorAll('.squere')


const timesClicked = {'red':0, 'blue' :0 , 'green': 0}
squeres.forEach(squere => {
    squere.innerText = squere.value
   squere.onclick= ()=>{
    timesClicked[squere.value] += 1
    squere.innerText = timesClicked[squere.value]
    
   } 
});

function endGame () {
  timesClicked.red = 0
  timesClicked.blue = 0
  timesClicked.green= 0
  squeres.forEach(squere => {
      squere.innerText = squere.value
  } )

}

let EndGame = document.getElementById('end-game')
EndGame.onclick = () => endGame()
