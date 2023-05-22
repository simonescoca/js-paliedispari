// Chiedere all’utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma

const userWord = prompt ("Enter a word")

if (isThisWordAPalindrome (userWord)) {
    console.log ("You DID enter a palindrome!")

} else {
    console.log ("Your word is NOT a palindrome.")
}

// FUNCTIONS /////////////////////

/**
 * Checks if a random word is a palindrome
 * @param randomWord word to check
 * @returns true if the input is a palindrome or false if it is not
 */

function isThisWordAPalindrome (randomWord) {
    let reverseRandomWord = ""

    for (let i = (randomWord.length - 1) ; i >= 0 ; i--) {
        reverseRandomWord += randomWord[i]
    }

    if (randomWord === reverseRandomWord){
        return true

    } else {
        return false
    }
}