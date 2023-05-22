// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione)
// Sommiamo i due numeri Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto

const radioPari = document.getElementById ("pari")
const radioDispari = document.getElementById ("dispari")
const inputRange = document.getElementById ("user-number")
const button = document.getElementById ("button")

initialValue ()

// FUNZIONI ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/**
 * Checks if the sum of two numbers is even or odd
 * @param userNumber the 1st number entered
 * @param numberAI the 2nd number entered
 * @returns true if sum is even, false if odd
 */

function isSumOddOrEven (userNumber, numberAI) {
    const sum = userNumber + numberAI
    if (sum % 2 === 0) {
        return true

    } else {
        return false
    }
}

/**
 * Generates a random number between 1 and 5
 * @returns this generated number
 */

function generateRandomNumber () {
    const randomNumber = (Math.floor (Math.random () * 5) + 1)
    return randomNumber
}

/**
 * Inits the value of input type range when the page loads and assigns this value to the span next to the input
 */

function initialValue () {
    const inputVal = parseInt (inputRange.value)
    document.getElementById ("input-value") .innerText = inputVal
}

/**
 * Runs the main code. This func() exists only to be recalled several times in the event listeners
 */

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


// EVENT-LISTENERS ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
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