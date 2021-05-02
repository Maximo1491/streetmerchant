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
      brand: 'pokemon',
      model: 'tin',
      series: 'sword-and-shield',
      url: 'https://www.argos.co.uk/product/3907980',
    },
  ],
  name: 'Argos',
  postage: 0,
};
