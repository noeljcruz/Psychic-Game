
// Array that contains every letter in the alphabet.

let Letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

// Initial variable declarations.

let Wins = 0;
let Losses = 0;
let GuessesSoFar = "";
let GuessesLeft = 9;

// Starts off the game my having the Computer select a random letter from the Letters array.

let CompLetter = Letters[Math.floor(Math.random()*Letters.length)];
console.log(CompLetter);

document.onkeyup = function (event) {

// Upon pressing a key, the following happens: That key is logged as the user's guess, it is added to the list of guesses so far, and the number of guesses left is reduced by one.

    let UserGuess = event.key;
    console.log(UserGuess);
    GuessesSoFar = GuessesSoFar + UserGuess;
    GuessesLeft--;
    console.log(GuessesSoFar);

// If the user's guess matches the computer's letter, then a win is added, the guesses so far resets to blank, the guesses left resets to 9, and the computer selects a new letter at random.

    if (UserGuess === CompLetter) { 
        Wins++;
        GuessesSoFar = "";
        GuessesLeft = 9;
        CompLetter = Letters[Math.floor(Math.random()*Letters.length)];
        console.log(CompLetter);
    }

// If the user runs out of guesses, then a loss is added, the guesses so far resets to blank, the guesses left resets to 9, and the computer selects a new letter at random.
    
    if (GuessesLeft < 1) {
        Losses++;
        GuessesSoFar = "";
        GuessesLeft = 9;
        CompLetter = Letters[Math.floor(Math.random()*Letters.length)];
        console.log(CompLetter);
    }
    
    console.log(GuessesLeft);

} 