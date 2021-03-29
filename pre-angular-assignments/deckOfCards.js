let suit = {
	1: "\u2660",
	2: "\u2666",
	3: "\u2665",
	4: "\u2663"
}

let stringValue = {
	1: "Ace",
	2: "Two",
	3: "Three",
	4: "Four",
	5: "Five",
	6: "Six",
	7: "Seven",
	8: "Eight",
	9: "Nine",
	10: "Ten",
	11: "Jack",
	12: "Queen",
	13: "King"
}

let numericValue = {
	1: 1,
	2: 2,
	3: 3,
	4: 4,
	5: 5,
	6: 6,
	7: 7,
	8: 8,
	9: 9,
	10: 10,
	11: 11,
	12: 12,
	13: 13
}


class Card {
	constructor(suit, stringValue, numericValue) {
		this.suit = suit;
		this.stringValue = stringValue;
		this.numericValue = numericValue;
	}

	show() {
		console.log(`This is a ${this.numericValue} of ${this.stringValue}.`);
	}
}

class Deck {
	constructor() {
		this.cards = [];
		for (let i = 0; i < 5; i++) {
			for (let j = 0; j < 14; j++) {
				let card = new Card(suit[i], stringValue[j], numericValue[j]);
				this.cards.push(card);
			};
		};
	};

	shuffle() {

		let m = this.cards.length, t, i;
		while (m) {
			i = Math.floor(Math.random() * m--);
			t = this.cards[m];
			this.cards[m] = this.cards[i];
			this.cards[i] = t;
		}
		return this.cards;
	};

	reset() {
		this.cards = [];
		this.create();
	};

	deal() {
		return this.cards.pop();
	};

}

class Player {
	constructor(name) {
		this.name = name;
		this.hand = [];
	};

	takeCard() {
		let drawCard = deck.deal();
		this.hand.push(drawCard);
	};

	discardCard() {
		this.hand.pop();
	};
};

let deck = new Deck();

let dojo = new Player();
dojo.takeCard(deck);
dojo.takeCard(deck);
console.log(dojo.hand);
dojo.discardCard();
console.log(dojo.hand);
// console.log();