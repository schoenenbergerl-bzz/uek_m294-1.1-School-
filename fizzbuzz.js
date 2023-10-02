document.addEventListener('DOMContentLoaded', function () {
    const startButton = document.getElementById('startButton');
    const outputDiv = document.getElementById('output');

    startButton.addEventListener('click', function () {
        runFizzBuzz(outputDiv);
    });
});

function runFizzBuzz(outputDiv) {
    let output = "";
    for (let i = 1; i <= 100; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            output += "FizzBuzz<br>";
        } else if (i % 3 === 0) {
            output += "Fizz<br>";
        } else if (i % 5 === 0) {
            output += "Buzz<br>";
        } else {
            output += i + "<br>";
        }
    }
    outputDiv.innerHTML = output;
}
