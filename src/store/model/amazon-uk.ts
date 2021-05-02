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
      brand: 'pokemon',
      model: 'booster-box',
      cartUrl:
        'https://www.amazon.co.uk/gp/aws/cart/add.html?ASIN.1=B08R84814V&Quantity.1=1',
      series: 'battle-styles',
      url: 'https://www.amazon.co.uk/Pokémon-TCG-Shield-Battle-Booster/dp/B08R84814V',
      maxPrice: 120
    },
  ],
  name: 'Amazon',
  postage: 0,
};
