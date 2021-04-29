import {Store} from './store';

export const Argos: Store = {
  currency: '£',
  labels: {
    inStock: {
      container: 'button[data-test="add-to-trolley-button-button"',
      text: ['to trolley'],
    },
    maxPrice: {
      container: 'li[itemprop="price"]',
    },
  },
  links: [
    {
      brand: 'test:brand',
      model: 'test:model',
      series: 'test:series',
      url: 'https://www.argos.co.uk/product/5718469',
    },
    {
      brand: 'pokemon',
      model: 'tin',
      series: 'unknown',
      url: 'https://www.argos.co.uk/product/3907980',
    },
  ],
  name: 'argos',
};
