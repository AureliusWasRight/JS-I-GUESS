// Generates random number betwen {1, 999}  +
// User guesses
// If they guess wrong, try again (and give a hint)

function guessing_game() {
    let n = Math.floor(Math.random() * 1000);
    let guess;

    do {
        guess = prompt("Guess a number between 1 and 10");
        console.log(guess, n);
        if (n > guess) {
            console.log("Too low!");
        } else if (n < guess) {
            console.log("Too high!");
        }
    } while (guess != n);

    console.log("You win!");
}

guessing_game();
