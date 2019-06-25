
// Array that contains every letter in the alphabet.
let Letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

let Wins = 0;
let Losses = 0;
// let GuessesLeft = 9;
let GuessesSoFar = "";

let CompLetter = Letters[Math.floor(Math.random() * Letters.length)];
console.log(CompLetter);

document.onkeyup = function (event) {

    // do {

    //     let UserGuess = event.key;
    //     console.log(UserGuess);

    //     if (UserGuess !== CompLetter) {

    //         GuessesLeft--;
    //         console.log(GuessesLeft);

    //         GuessesSoFar = GuessesSoFar + UserGuess;
    //         console.log(GuessesSoFar);

    //     }

    // } while (UserGuess == CompLetter || GuessesLeft > 0);
    
    let UserGuess = event.key;
    console.log(UserGuess);
    
    for (let GuessesLeft = 9; GuessesLeft > 0; GuessesLeft--) {
        

        if (UserGuess !== CompLetter) {
            GuessesSoFar = GuessesSoFar + UserGuess;
            console.log(GuessesSoFar)
        }
        console.log(GuessesLeft);
    }

} 