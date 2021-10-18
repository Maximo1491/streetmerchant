import {Link, Store} from './store';

export const AmazonJp: Store = {
  backoffStatusCodes: [403, 429, 503],
  currency: '¥',
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
    
  ],
  name: 'Amazon-JP',
  postage: 1698,
};
