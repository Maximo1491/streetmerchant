import {Link, Store} from './store';

export const AmazonUk: Store = {
  backoffStatusCodes: [403, 429, 503],
  currency: '£',
  labels: {
    captcha: {
      container: 'body',
      text: ['enter the characters you see below'],
    },
    inStock: {
      container: '#availability',
      text: ['in stock'],
    },
    maxPrice: {
      container: '#priceblock_ourprice',
    },
    outOfStock: [
      {
        container: '#availability',
        text: ['out of stock', 'unavailable'],
      },
      {
        container: '#backInStock',
        text: ['unavailable'],
      },
    ],
  },
  links: [
    {
      brand: 'test:brand',
      cartUrl:
        'https://www.amazon.co.uk/gp/aws/cart/add.html?ASIN.1=B0753R2TWC&Quantity.1=1',
      model: 'test:model',
      series: 'test:series',
      url: 'https://www.amazon.co.uk/dp/B0753R2TWC/',
    },
    {
      brand: 'pokemon',
      model: 'booster-box',
      series: 'battle-styles',
      url: 'https://www.amazon.co.uk/Pokémon-TCG-Shield-Battle-Booster/dp/B08R84814V',
    },
  ],
  name: 'amazon-uk',
};
