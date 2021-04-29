import {Store} from './store';

export const Game: Store = {
  currency: '£',
  labels: {
    inStock: {
      container: '.buyingOptions',
      text: ['Pre-order Now', 'Buy New'],
    },
    maxPrice: {
      container: '.buyingOptions .btnPrice',
      euroFormat: false,
    },
    outOfStock: {
      container: '.buyingOptions',
      text: ['out of stock'],
    },
  },
  links: [
    {
      brand: 'pokemon',
      model: 'booster',
      series: 'battle-styles',
      url: 'https://www.game.co.uk/en/pokemon-tcg-sword-shield-5-battle-styles-booster-2850571',
    },
  ],
  name: 'Game',
  postage: 4.99,
};
