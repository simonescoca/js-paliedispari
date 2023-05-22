// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione)
// Sommiamo i due numeri Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto

const radioPari = document.getElementById ("pari")
const radioDispari = document.getElementById ("dispari")
const inputRange = document.getElementById ("user-number")
const button = document.getElementById ("button")

initialValue ()

// FUNZIONI ///////////////////////////////////////////

function isSumOddOrEven (userNumber, numberAI) {
    const sum = userNumber + numberAI
    if (sum % 2 === 0) {
        return true

    } else {
        return false
    }
}

function generateRandomNumber () {
    const randomNumber = (Math.floor (Math.random () * 5) + 1)
    return randomNumber
}

function initialValue () {
    const inputVal = parseInt (inputRange.value)
    document.getElementById ("input-value") .innerText = inputVal
}

function eseguiCodice () {
    const AI = generateRandomNumber ()
    const inputVal = parseInt (inputRange.value)
    const pari = radioPari.checked
    const dispari = radioDispari.checked

    if (isNaN (inputVal) || !pari || !dispari) {
        document.getElementById ("risposta") .innerHTML = "<p class='response'>C'è un errore di input</p>"

    }
    
    if ( isSumOddOrEven (inputVal, AI ) && pari ) {
        document.getElementById ("risposta") .innerHTML = '<p class="response">Il tuo numero: ' + inputVal + " Il numero dell'AI: " + AI + ', la loro somma è PARI! HAI VINTO!</p>'

    } else if ( isSumOddOrEven (inputVal, AI ) && dispari ) {
        document.getElementById ("risposta") .innerHTML = '<p class="response">Il tuo numero: ' + inputVal + " Il numero dell'AI: " + AI + ', la loro somma è PARI, Hai perso.</p>'

    } else if ( !isSumOddOrEven (inputVal, AI ) && pari ) {
        document.getElementById ("risposta") .innerHTML = '<p class="response">Il tuo numero: ' + inputVal + " Il numero dell'AI: " + AI + ', la loro somma è DISPARI, Hai perso.</p>'

    } else if ( !isSumOddOrEven (inputVal, AI ) && dispari ) {
        document.getElementById ("risposta") .innerHTML = '<p class="response">Il tuo numero: ' + inputVal + " Il numero dell'AI: " + AI + ', la loro somma è DISPARI! HAI VINTO!</p>'

    }
}


// EVENT-LISTENERS ////////////////////////////////////
button.addEventListener ("click",
    function () {
        eseguiCodice ()
    }
)

inputRange.addEventListener ("input",
    function () {
        initialValue ()
    }
)

document.addEventListener ("keydown", 
    function (event) {
        if (event.key === "Enter") {
            eseguiCodice ()
        }
    }
)