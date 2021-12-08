/**
 * Code from:
 * https://github.com/dangviettuan/bghoard
 */

import { Game, Review } from '@bghoard/api-interfaces';

const randomInteger = (min: number, max: number): number => {
  return Math.floor(Math.random() * (max + 1 - min) + min);
};

const randomReviews = (game: string): Review[] => {
  return new Array<Review>(randomInteger(1, 3)).fill({} as Review).map(() => ({
    game,
    rating: randomInteger(0, 5),
    content: 'Lorem ipsum dolor sit amet',
  }));
};

export const games: Game[] = [
  {
    id: 'the-werewolves-of-millers-hollow',
    name: 'The Werewolves of Millers Hollow',
    image: './assets/ma-soi.png',
    description:
      'The Werewolves of Millers Hollow is a card game created by the French authors Philippe des Pallières and Hervé Marly that can be played with 8 to 47 players. The game is based on the Russian game Mafia. It was nominated for the 2003 Spiel des Jahres award.',
    price: 35,
    reviews: randomReviews('the-werewolves-of-millers-hollow'),
  },
  {
    id: 'monopoly',
    name: 'Monopoly',
    image: './assets/monopoly.jpeg',
    description:
      'Monopoly is a board game currently published by Hasbro. In the game, players roll two six-sided dice to move around the game board, buying and trading properties, and developing them with houses and hotels.',
    price: 15,
    reviews: randomReviews('monopoly'),
  },
  {
    id: 'exploding-kittens',
    name: 'Exploding Kittens',
    image: './assets/meo-no.png',
    description:
      'Exploding Kittens is passphrased as a “strategic card game about cats and destruction” which follows the gameplay which is to collect kittens while at the same time demoting the other players’ amount of kittens.',
    price: 45,
    reviews: randomReviews('exploding-kittens'),
  },
];

export const getGames = (req, res) => {
  res.send(
    games.map((game) => ({
      ...game,
      rating: game.reviews.reduce(
        (avg, next) => avg + next.rating / game.reviews.length,
        0
      ),
    }))
  );
};
