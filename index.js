let desplay = document.getElementById("desplay")



function appendToDisplay(input) {
    desplay.value += input
}

// Clear

function Clear() {
    desplay.value = "" 
}

// calculation

function Calc() {
    desplay.value = eval(desplay.value)
}

//  square root

function squareRoot() {
    desplay.value = Math.sqrt(desplay.value)
}


