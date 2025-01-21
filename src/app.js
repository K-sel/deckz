import Deck from "./Deck";

const options = {
  values: [2, 3, 4, 5, 6, 7, 8, 9, "J", "Q", "K", "A"],
  suits: ["Hearts", "Diamonds", "Spades", "Clubs"],
};

let deck = new Deck(options);

deck.createFullDeck();
deck._shuffle();
deck.displayCards();

console.log(deck);
