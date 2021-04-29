import {Store} from './store';

export const SmythsToys: Store = {
  currency: '£',
  labels: {
    inStock: {
      container: '#addToCartButton',
      text: ['add to basket'],
    },
    maxPrice: {
      container: '.price_tag',
      euroFormat: false,
    },
    outOfStock: {
      container: '.instoreMessage',
      text: ['out of stock'],
    },
  },
  links: [
    {
      brand: 'test:brand',
      model: 'test:model',
      series: 'test:series',
      url:
        'https://www.smythstoys.com/uk/en-gb/video-games-and-tablets/video-games/call-of-duty-video-games/call-of-duty-black-ops-cold-war/call-of-duty-black-ops-cold-war-ps5/p/191951',
    },
    {
      brand: 'pokemon',
      model: 'booster',
      series: 'battle-styles',
      url:
        'https://www.smythstoys.com/uk/en-gb/toys/action-figures-and-playsets/pokemon/pokemon-trading-cards-game/pok%c3%a9mon-trading-card-game-sword-and-shield-5-battle-styles-booster-pack-assortment/p/197254',
    },
  ],
  name: 'smythstoys',
};
