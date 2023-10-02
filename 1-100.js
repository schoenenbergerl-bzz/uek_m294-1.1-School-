const randomnum = Math.floor(Math.random() * 100) + 1;

let versuche = 0;
let guessednum;

while (guessednum !== randomnum) {
    guessednum = parseInt(prompt("Geben Sie eine Zahl zwischen 1 und 100 ein:"));

    if (isNaN(guessednum)) {
        alert("Das ist keine gültige Zahl. Bitte geben Sie eine Zahl zwischen 1 und 100 ein.");
    } else {
        versuche++;

        if (guessednum > randomnum) {
            alert("Zu hoch! Versuchen Sie es erneut.");
        } else if (guessednum < randomnum) {
            alert("Zu niedrig! Versuchen Sie es erneut.");
        } else {
            alert(`Herzlichen Glückwunsch! Sie haben die Zahl ${randomnum} in ${versuche} Versuchen erraten.`);
        }
    }
}
