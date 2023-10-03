document.addEventListener("DOMContentLoaded", function () {
    const randomnum = Math.floor(Math.random() * 100) + 1;

    let trys = 0;
    let guessednum;
    const messageElement = document.getElementById("message");
    const attemptsElement = document.getElementById("attempts");
    const guessButton = document.getElementById("guessButton");

    guessButton.addEventListener("click", checkGuess);

    function checkGuess() {
        guessednum = parseInt(document.getElementById("guessInput").value);

        if (isNaN(guessednum) || guessednum < 1 || guessednum > 100) {
            messageElement.textContent = "Please enter a valid number between 1 and 100.";
        } else {
            trys++;

            if (guessednum > randomnum) {
                messageElement.textContent = "Too high! Try again.";
            } else if (guessednum < randomnum) {
                messageElement.textContent = "Too low! Try again.";
            } else {
                messageElement.textContent = `Congratulations! You guessed the number ${randomnum} in ${trys} tries.`;
            }

            attemptsElement.textContent = `Number of attempts: ${trys}`;
        }
    }
});
