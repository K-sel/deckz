import { shuffle } from "lodash-es";
import Card from "./Card";

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
        this.#cards.push(new Card(value, suit));
      }
    }
  }

  _shuffle() {
    this.#cards = shuffle(this.#cards);
  }

  displayCards() {
    this.#cards.forEach((card) => card.display());
  }
}

export default Deck;
