import {Link, Store} from './store';

export const AmazonUk: Store = {
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
    {
      brand: 'pokemon',
      model: 'box',
      description: "Eevee Heroes Box",
      thumbnail: 'https://images-na.ssl-images-amazon.com/images/I/71VuQkn28CS._AC_SL1260_.jpg',
      series: 'japanese-sets',
      url: 'https://www.amazon.co.jp/dp/B08WB9FZ5D/'
    },
    {
      brand: 'pokemon',
      model: 'box',
      description: "Special Set Eevee Heroes",
      thumbnail: 'https://images-na.ssl-images-amazon.com/images/I/91er4CpYu9S._AC_SL1500_.jpg',
      series: 'japanese-sets',
      url: 'https://www.amazon.co.jp/dp/B08WB9S8F8/'
    },
    {
      brand: 'pokemon',
      model: 'box',
      description: "Eevee Heroes Eevys Set",
      thumbnail: 'https://images-na.ssl-images-amazon.com/images/I/61GiDgaaUoS._AC_SL1080_.jpg',
      series: 'japanese-sets',
      url: 'https://www.amazon.co.jp/dp/B08X2RL2V3/'
    },
  ],
  name: 'Amazon-JP',
  postage: 1698,
};
