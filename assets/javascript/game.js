
// Array that contains every letter in the alphabet.
let Letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

let Wins = 0;
let Losses = 0;
let GuessesLeft = 9;
let GuessesSoFar = "";


let CompLetter = Letters[Math.floor(Math.random()*Letters.length)];
console.log(CompLetter);


document.onkeyup = function (event) {

    let UserGuess = event.key;
    console.log(UserGuess);
    GuessesLeft--;

    
    if (UserGuess === CompLetter) {
        
        GuessesLeft = 9;
        CompLetter = Letters[Math.floor(Math.random()*Letters.length)];
        console.log(CompLetter);
        
    }
    
    console.log(GuessesLeft);

    // if (UserGuess !== CompLetter) {
    //     GuessesLeft--;
    //     console.log(GuessesLeft);
    // }
    // else if (GuessesLeft < 1) {
    //     let CompLetter = Letters[Math.floor(Math.random()*Letters.length)];
    //     console.log(CompLetter);
    //     let GuessesLeft = 9;

    // }

    // if (UserGuess !== CompLetter) {
    //     GuessesLeft--;
    // }
    // else {
    //     GuessesLeft = 9;
    //     CompLetter = Letters[Math.floor(Math.random() * Letters.length)];
    // }
    // console.log(GuessesLeft);
    // console.log(CompLetter);

} 