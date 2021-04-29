import {Store} from './store';

export const JohnLewis: Store = {
  currency: '£',
  labels: {
    inStock: {
      container: '#button--add-to-basket',
      text: ['Add to your basket'],
    },
  },
  links: [
    {
      brand: 'test:brand',
      model: 'test:model',
      series: 'test:series',
      url:
        'https://www.johnlewis.com/sony-playstation-5-dualsense-wireless-controller-white/p5192093',
    },
    {
      brand: 'pokemon',
      model: 'triple-booster',
      series: 'unknown',
      url:
        'https://www.johnlewis.com/pokemon-triple-booster-pack-trading-cards-assorted/p3017163',
    },
  ],
  name: 'johnlewis',
};
