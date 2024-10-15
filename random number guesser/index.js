const messages = [
    document.getElementById("message1"),
    document.getElementById("message2"),
    document.getElementById("message3")
];

const answer = Math.floor(Math.random() * 100) + 1;
let noOfGuesses = 0;
let guessedNumbers = [];

function play() {
    const userGuess = parseInt(document.getElementById("guess").value, 10);

    if (userGuess < 1 || userGuess > 100) {
        alert("Please enter a number between 1 and 100.");
        return;
    }

    guessedNumbers.push(userGuess);
    noOfGuesses++;

    if (userGuess < answer) {
        updateMessages("Too low!");
    } else if (userGuess > answer) {
        updateMessages("Too high!");
    } else {
        updateMessages(`You Won! The number was: ${answer}. You guessed it in ${noOfGuesses} attempts.`);
    }
}

function updateMessages(message) {
    messages[0].textContent = message;
    messages[1].textContent = `No Of Guesses: ${noOfGuesses}`;
    messages[2].textContent = `Guessed Numbers: ${guessedNumbers.join(', ')}`;
}
