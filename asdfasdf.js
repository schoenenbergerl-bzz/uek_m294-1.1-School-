document.addEventListener('DOMContentLoaded', function () {
    const words = [
        'Apple', 'Banana', 'Cherry', 'Grapes', 'Lemon', 'Orange',
        'Apple', 'Banana', 'Cherry', 'Grapes', 'Lemon', 'Orange'
    ];

    const memoryGame = document.querySelector('.memory-game');

    let flippedCards = [];
    let matchedPairs = 0;

    function shuffle(array) {
        let currentIndex = array.length, randomIndex, tempValue;

        while (currentIndex !== 0) {
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex--;

            tempValue = array[currentIndex];
            array[currentIndex] = array[randomIndex];
            array[randomIndex] = tempValue;
        }

        return array;
    }

    function createCard(word) {
        const card = document.createElement('div');
        card.classList.add('card');
        card.dataset.word = word;

        card.addEventListener('click', function () {
            if (!card.classList.contains('flipped') && flippedCards.length < 2) {
                card.textContent = word; // Show the word
                card.classList.add('flipped');
                flippedCards.push(card);

                if (flippedCards.length === 2) {
                    const [card1, card2] = flippedCards;
                    if (card1.dataset.word === card2.dataset.word) {
                        card1.classList.add('matched');
                        card2.classList.add('matched');
                        flippedCards = [];

                        matchedPairs++;
                        if (matchedPairs === words.length / 2) {
                            setTimeout(() => alert('Congratulations! You won!'), 500);
                        }
                    } else {
                        setTimeout(() => {
                            card1.textContent = ''; // Hide the word
                            card1.classList.remove('flipped');
                            card2.textContent = ''; // Hide the word
                            card2.classList.remove('flipped');
                            flippedCards = [];
                        }, 1000);
                    }
                }
            }
        });

        return card;
    }

    function initializeGame() {
        const shuffledWords = shuffle(words);

        for (const word of shuffledWords) {
            const card = createCard(word);
            memoryGame.appendChild(card);
        }
    }

    initializeGame();
});
