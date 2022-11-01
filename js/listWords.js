
const listWords = [
    'money',
    'oranges',
    'wind',
    'mine',
    'calendar',
    'help',
    'cork',
    'boys',
    'answer',
    'offer',
    'use',
    'chicken',
    'love',
    'show',
    'boot',
    'day',
    'food',
    'skin',
    'trail',
    'crayon',
    'camera',
    'bed',
    'fog',
    'tomatoes',
    'father',
    'argument',
    'cactus',
    'gate',
    'bit',
    'writer',
    'company',
    'tiger',
    'prose',
    'change',
    'butter',
    'knife'
]

function load() {
    location.reload()
}


let wordToGuess = ''


function pickWord() {
    wordToGuess = listWords[Math.floor(Math.random() * listWords.length)].toUpperCase()
    wordToGuess.split()
    console.log(wordToGuess)
}



function generateKeyboard() {
    let lettersHtml = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('').map(letter =>
        `
        <button
        class='lettersButtons'
        id='` + letter + `'
        onclick="handleGuess('` + letter + `')"
        >
             ` + letter + `
        </button>`).join('')

    document.getElementById('letters').innerHTML = lettersHtml
}

let livesLeft = 8
let guessed = []
let wrongGuess = []



function handleGuess(typedLetter) {
    if (wordToGuess.indexOf(typedLetter) === -1) {
        wrongGuess.push(typedLetter)
        livesLeft--
        
    }
    else if (wordToGuess.indexOf(typedLetter) >= 0) {
        guessed.push(typedLetter)
        showLetters()
        winGame()
    }

    if(wrongGuess.indexOf(typedLetter) >= 0 || guessed.indexOf(typedLetter) >= 0){
       document.getElementById(typedLetter).setAttribute('disabled',true)
    } 
 
    document.getElementById('wrongGuess').innerHTML = wrongGuess
    document.getElementById('nbrLives').innerHTML = livesLeft

    checkLives()
    updateImage(livesLeft)
    
}

let wordStatus = null
function showLetters(){
    wordStatus = wordToGuess.split('').map(letter => (guessed.indexOf(letter) >= 0 ? letter : " - ")).join('')
    document.getElementById('word').innerHTML = wordStatus
}

function winGame(){
   
    if(wordToGuess === wordStatus){
        document.getElementById('over').innerHTML = "WELL DONE !"
        jsConfetti.addConfetti()
    }
    
}



function checkLives() {
    if (livesLeft === 0) {
        document.getElementById('over').innerHTML = `GAME OVER ! The word to guess was ${wordToGuess}`
    }
}

const arrayImg = [1, 2, 3, 4, 5, 6, 7]
function updateImage(livesLeft) {
     document.getElementById("image").src = `./img/${livesLeft}.png`
    if(wordStatus === wordToGuess){
        document.getElementById('image').src ='./img/victory.png'
    }
}




pickWord()
generateKeyboard()

