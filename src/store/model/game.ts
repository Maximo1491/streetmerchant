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
      brand: 'test:brand',
      model: 'test:model',
      series: 'test:series',
      url:
        'https://www.game.co.uk/en/ea-sports-fifa-21-500gb-ps4-bundle-2832947',
    },
    {
      brand: 'pokemon',
      model: 'booster',
      series: 'battle-styles',
      url: 'https://www.game.co.uk/en/pokemon-tcg-sword-shield-5-battle-styles-booster-2850571',
    },
  ],
  name: 'game',
};
