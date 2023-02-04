var max = 1000001
var min = 0


//When 'Start' is pressed.
function start(){
    range = max - min
    guess = Math.floor(range/2)

    document.getElementById('words').innerHTML = guess

    document.getElementById('start').style.display = 'none'

    document.getElementById('lower').style.display = 'block'
    document.getElementById('correct').style.display = 'block'
    document.getElementById('higher').style.display = 'block'
}

//When 'Lower' is pressed.
function lower(){
    max = guess

    range = max - min
    guess -= Math.floor(range/2)

    document.getElementById('words').innerHTML = guess
}

//When 'Higher' is pressed.
function higher(){
    min = guess

    range = max - min
    guess += Math.floor(range/2)

    document.getElementById('words').innerHTML = guess
}

//When 'Correct' is pressed.
function correct(){
    document.getElementById('words').innerHTML = guess + ' was you number!'

    document.getElementById('lower').style.display = 'none'
    document.getElementById('correct').style.display = 'none'
    document.getElementById('higher').style.display = 'none'
    document.getElementById('restart').style.display = 'block'
}

//Restart System
function restart(){
    document.getElementById('words').innerHTML = 'Think of a whole number from 1 to 1,000,000, and press Start.'

    document.getElementById('restart').style.display = 'none'
    document.getElementById('start').style.display = 'block'
}