// Create deck of cards
const suits = ["♠", "♥", "♦", "♣"];
const values = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
let deck = [];

// Function to create a deck of cards
function createDeck() {
    deck = [];
    for (let suit of suits) {
        for (let value of values) {
            deck.push({ value, suit });
        }
    }
    renderDeck();
}

// Fisher-Yates Shuffle Algorithm
function shuffleDeck() {
    const deckContainer = document.getElementById("deck");
    const cards = document.querySelectorAll(".card");

    // Fade out existing cards before shuffling
    cards.forEach(card => card.classList.add("fade-out"));

    setTimeout(() => {
        for (let i = deck.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * (i + 1));
            [deck[i], deck[j]] = [deck[j], deck[i]];
        }
        renderDeck();
    }, 500); // Wait for fade-out before re-rendering
}

// Render the deck on the screen
function renderDeck() {
    const deckContainer = document.getElementById("deck");
    deckContainer.innerHTML = ""; // Clear previous cards

    deck.forEach((card, index) => {
        const cardElement = document.createElement("div");
        cardElement.classList.add("card", "fade-out"); // Start hidden
        cardElement.innerHTML = `${card.value} ${card.suit}`;
        
        // Coloring suits
        if (card.suit === "♥" || card.suit === "♦") {
            cardElement.style.color = "red";
        } else {
            cardElement.style.color = "black";
        }

        deckContainer.appendChild(cardElement);

        // Animate cards appearing one by one
        setTimeout(() => {
            cardElement.classList.remove("fade-out");
            cardElement.classList.add("fade-in");
        }, index * 50);
    });
}

// Initialize the deck on page load
createDeck();
