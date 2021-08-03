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
      model: 'tin',
      description: 'Hidden Fates Random Tin',
      thumbnail: 'https://images-na.ssl-images-amazon.com/images/I/71mvWo6R8yL._AC_SL1248_.jpg',
      cartUrl:
        'https://www.amazon.co.uk/gp/aws/cart/add.html?ASIN.1=B07S9WBNV2&Quantity.1=1',
      series: 'hidden-fates',
      url: 'https://www.amazon.co.uk/gp/product/B07S9WBNV2/',
      maxPrice: 25
    },
    {
      brand: 'pokemon',
      model: 'etb',
      description: 'Hidden Fates Elite Trainer Box',
      thumbnail: 'https://images-na.ssl-images-amazon.com/images/I/61xk1bwrt6L._AC_.jpg',
      cartUrl:
        'https://www.amazon.co.uk/gp/aws/cart/add.html?ASIN.1=B07SPJY3YR&Quantity.1=1',
      series: 'hidden-fates',
      url: 'https://www.amazon.co.uk/gp/product/B07SPJY3YR/',
      maxPrice: 60
    },
    {
      brand: 'pokemon',
      model: 'tin',
      description: 'Hidden Fates Raichu Tin',
      thumbnail: 'https://images-na.ssl-images-amazon.com/images/I/61niEZZ%2BvIL._AC_SL1000_.jpg',
      cartUrl:
        'https://www.amazon.co.uk/gp/aws/cart/add.html?ASIN.1=B07XTKBCN9&Quantity.1=1',
      series: 'hidden-fates',
      url: 'https://www.amazon.co.uk/gp/product/B07XTKBCN9/',
      maxPrice: 25
    },
    {
      brand: 'pokemon',
      model: 'tin',
      description: 'Hidden Fates Charizard Tin',
      thumbnail: 'https://images-na.ssl-images-amazon.com/images/I/71tKJqYPtvL._AC_SL1248_.jpg',
      cartUrl:
        'https://www.amazon.co.uk/gp/aws/cart/add.html?ASIN.1=B07XTKQBZG&Quantity.1=1',
      series: 'hidden-fates',
      url: 'https://www.amazon.co.uk/gp/product/B07XTKQBZG/',
      maxPrice: 25
    },
    {
      brand: 'pokemon',
      model: 'tin',
      description: 'Hidden Fates Gyarados Tin',
      thumbnail: 'https://images-na.ssl-images-amazon.com/images/I/71cj%2BXR9mmL._AC_SL1500_.jpg',
      cartUrl:
        'https://www.amazon.co.uk/gp/aws/cart/add.html?ASIN.1=B07XTJV8DC&Quantity.1=1',
      series: 'hidden-fates',
      url: 'https://www.amazon.co.uk/gp/product/B07XTJV8DC/',
      maxPrice: 25
    },
    {
      brand: 'pokemon',
      model: 'etb',
      thumbnail: 'https://images-na.ssl-images-amazon.com/images/I/61B9mMB6oML._AC_SL1500_.jpg',
      description: 'Zacian and Zamazenta Ultra Premium Collection',
      cartUrl:
        'https://www.amazon.co.uk/gp/aws/cart/add.html?ASIN.1=B08HJ86Y8T&Quantity.1=1',
      series: 'sword-and-shield',
      url: 'https://www.amazon.co.uk/gp/product/B08HJ86Y8T/',
      maxPrice: 120
    },
    {
      brand: 'pokemon',
      model: 'box',
      description: "Galarian Sirfetch'd V Box",
      thumbnail: 'https://images-na.ssl-images-amazon.com/images/I/811UVItHUuL._AC_SL1500_.jpg',
      cartUrl:
        'https://www.amazon.co.uk/gp/aws/cart/add.html?ASIN.1=B08DN3PSYD&Quantity.1=1',
      series: 'sun-and-moon',
      url: 'https://www.amazon.co.uk/gp/product/B08DN3PSYD/',
      maxPrice: 23
    },
    {
      brand: 'pokemon',
      model: 'box',
      description: "Venusaur/Blastoise VMAX Box",
      thumbnail: 'https://images-na.ssl-images-amazon.com/images/I/513GL0cFrDL._AC_.jpg',
      cartUrl:
        'https://www.amazon.co.uk/gp/aws/cart/add.html?ASIN.1=B08S6KMQCT&Quantity.1=1',
      series: 'sword-and-shield',
      url: 'https://www.amazon.co.uk/gp/product/B08S6KMQCT/',
      maxPrice: 28
    },
    {
      brand: 'pokemon',
      model: 'tin',
      description: "Legends of Galar - V Tin",
      thumbnail: 'https://images-na.ssl-images-amazon.com/images/I/917Z2tL8SiL._AC_SL1500_.jpg',
      cartUrl:
        'https://www.amazon.co.uk/gp/aws/cart/add.html?ASIN.1=B0889B3FMB&Quantity.1=1',
      series: 'sword-and-shield',
      url: 'https://www.amazon.co.uk/gp/product/B0889B3FMB/',
      maxPrice: 22
    },
    {
      brand: 'pokemon',
      model: 'booster-box',
      description: "Vivid Voltage Booster Box",
      thumbnail: 'https://images-na.ssl-images-amazon.com/images/I/61-y8%2B2995L._AC_SL1000_.jpg',
      cartUrl:
        'https://www.amazon.co.uk/gp/aws/cart/add.html?ASIN.1=B08GZ7MWFV&Quantity.1=1',
      series: 'vivid-voltage',
      url: 'https://www.amazon.co.uk/gp/product/B08GZ7MWFV/',
      maxPrice: 110
    },
    {
      brand: 'pokemon',
      model: 'etb',
      description: "Vivid Voltage Elite Trainer Box",
      thumbnail: 'https://images-na.ssl-images-amazon.com/images/I/71sV9tdF0yL._AC_SL1500_.jpg',
      cartUrl:
        'https://www.amazon.co.uk/gp/aws/cart/add.html?ASIN.1=B08GZ7XP18&Quantity.1=1',
      series: 'vivid-voltage',
      url: 'https://www.amazon.co.uk/gp/product/B08GZ7XP18/',
      maxPrice: 45
    },
  ],
  name: 'Amazon',
  postage: 0,
};
