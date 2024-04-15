export interface CardValue {
  value: number;
  display: number | string;
}

export interface Deck {
  name: string;
  textValues: boolean;
  values: CardValue[];
}

export const decks: Deck[] = [
  {
    name: 'Zorgi',
    textValues: false,
    values: [
      { value: 0, display: 0 },
      { value: 1, display: 1 },
      { value: 2, display: 2 },
      { value: 3, display: 3 },
      { value: 4, display: 4 },
      { value: 8, display: 8 },
      { value: 16, display: 16 },
      { value: 24, display: 24 }
    ]
  }
]

export const decksDict: { [key: string]: Deck } = decks.reduce((result: { [key: string]: Deck }, deck: Deck) => {
  result[deck.name] = deck;
  return result;
}, {});

export function displayDeckValues(deck: Deck): string {
  return deck.values.map(v => v.display).join(', ');
}

export function displayCardValue(deck: Deck, cardValue: number): string | number | undefined {
  return deck.values.find(c => c.value === cardValue)?.display;
}
