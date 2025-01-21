import { shuffle } from "lodash-es";
import Card from "./Card";
// import _shuffle from "./node_modules/lodash-es/shuffle.js";

class Deck {
  #cards = [];
  #values = [];
  #suits = [];

  constructor(options) {
    this.#values = options.values;
    this.#suits = options.suits;
  }

  createFullDeck() {
    for (let suit of this.#suits) {
      for (let value of this.#values) {
        let card = new Card(value, suit);
        console.log(card);
        this.#cards.push(card);
      }
    }

    console.log(this.#cards);
  }

  _shuffle() {
    shuffle(this.#cards);
  }

  displayCards() {
    this.#cards.forEach((card) => card.display());
  }
}

export default Deck;
