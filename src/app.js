import Deck from "./Deck";

const options = {
  values: [2, 3, 4, 5, 6, 7, 8, 9, "J", "Q", "K", "A"],
  suits: ["Hearts", "Diamonds", "Spades", "Clubs"],
};

let deck = new Deck(options);

// Création du bouton de mélange
const shuffleButton = document.createElement("button");
shuffleButton.textContent = "Mélanger les cartes";
shuffleButton.style.margin = "10px";
document.body.appendChild(shuffleButton);

// Initialisation du deck
deck.createFullDeck();
deck.displayCards();

// Ajout de l'événement click sur le bouton
shuffleButton.addEventListener("click", () => {
  deck._shuffle();
  deck.displayCards(); // Rafraîchir l'affichage après le mélange
});

console.log(deck);
