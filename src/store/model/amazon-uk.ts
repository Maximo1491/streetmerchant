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
      description: 'Battle Styles Booster Box',
      thumbnail: 'https://images-na.ssl-images-amazon.com/images/I/81vbpp-b2MS._AC_SL1500_.jpg',
      cartUrl:
        'https://www.amazon.co.uk/gp/aws/cart/add.html?ASIN.1=B08R84814V&Quantity.1=1',
      series: 'battle-styles',
      url: 'https://www.amazon.co.uk/gp/product/B08R84814V/',
      maxPrice: 100
    },
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
      model: 'tin',
      description: 'Hidden Fates 3x Tins',
      thumbnail: 'https://images-na.ssl-images-amazon.com/images/I/618gIb7%2BA8L._AC_SL1024_.jpg',
      cartUrl:
        'https://www.amazon.co.uk/gp/aws/cart/add.html?ASIN.1=B07VND1BJF&Quantity.1=1',
      series: 'hidden-fates',
      url: 'https://www.amazon.co.uk/gp/product/B07VND1BJF/',
      maxPrice: 75
    },
    {
      brand: 'pokemon',
      model: 'etb',
      description: 'Shining Fates Elite Trainer Box',
      thumbnail: 'https://images-na.ssl-images-amazon.com/images/I/712jg2dyxEL._AC_SL1500_.jpg',
      cartUrl:
        'https://www.amazon.co.uk/gp/aws/cart/add.html?ASIN.1=B08PS2F9RD&Quantity.1=1',
      series: 'shining-fates',
      url: 'https://www.amazon.co.uk/gp/product/B08PS2F9RD/',
      maxPrice: 53
    },
    {
      brand: 'pokemon',
      model: 'mini-tin',
      description: 'Shining Fates Mini Tin',
      thumbnail: 'https://images-na.ssl-images-amazon.com/images/I/91qV1ehvzeL._AC_SL1500_.jpg',
      cartUrl:
        'https://www.amazon.co.uk/gp/aws/cart/add.html?ASIN.1=B08PTTVLBJ&Quantity.1=1',
      series: 'shining-fates',
      url: 'https://www.amazon.co.uk/gp/product/B08PTTVLBJ/',
      maxPrice: 10
    },
    {
      brand: 'pokemon',
      model: 'box',
      description: 'Shining Fates Random Mad Party Pin Collection',
      thumbnail: 'https://images-na.ssl-images-amazon.com/images/I/71LmmJrFwkL._AC_SL1000_.jpg',
      cartUrl:
        'https://www.amazon.co.uk/gp/aws/cart/add.html?ASIN.1=B08PTV374B&Quantity.1=1',
      series: 'shining-fates',
      url: 'https://www.amazon.co.uk/gp/product/B08PTV374B/',
      maxPrice: 16
    },
    {
      brand: 'pokemon',
      model: 'box',
      description: 'Shining Fates Pikachu V Box',
      thumbnail: 'https://images-na.ssl-images-amazon.com/images/I/617x1O-W2lL._AC_.jpg',
      cartUrl:
        'https://www.amazon.co.uk/gp/aws/cart/add.html?ASIN.1=B08PS15TSH&Quantity.1=1',
      series: 'shining-fates',
      url: 'https://www.amazon.co.uk/gp/product/B08PS15TSH/',
      maxPrice: 25
    },
    {
      brand: 'pokemon',
      model: 'box',
      description: 'Shining Fates Crobat/Dragapult Premium Collection',
      thumbnail: 'https://images-na.ssl-images-amazon.com/images/I/71oG815Mm5L._AC_SL1500_.jpg',
      cartUrl:
        'https://www.amazon.co.uk/gp/aws/cart/add.html?ASIN.1=B08PSBQPTV&Quantity.1=1',
      series: 'shining-fates',
      url: 'https://www.amazon.co.uk/gp/product/B08PSBQPTV/',
      maxPrice: 42
    },
    {
      brand: 'pokemon',
      model: 'tin',
      description: 'Shining Fates Random Tin',
      thumbnail: 'https://images-na.ssl-images-amazon.com/images/I/51M1bHJ9srL._AC_.jpg',
      cartUrl:
        'https://www.amazon.co.uk/gp/aws/cart/add.html?ASIN.1=B08PS582QY&Quantity.1=1',
      series: 'shining-fates',
      url: 'https://www.amazon.co.uk/gp/product/B08PS582QY/',
      maxPrice: 30
    },
    {
      brand: 'pokemon',
      model: 'tin',
      description: 'Shining Fates Random Tin',
      thumbnail: 'https://images-na.ssl-images-amazon.com/images/I/51M1bHJ9srL._AC_.jpg',
      cartUrl:
        'https://www.amazon.co.uk/gp/aws/cart/add.html?ASIN.1=B08PS582QY&Quantity.1=1',
      series: 'shining-fates',
      url: 'https://www.amazon.co.uk/gp/product/B08RDV1GVB/',
      maxPrice: 30
    },
    {
      brand: 'pokemon',
      model: 'etb',
      thumbnail: 'https://images-na.ssl-images-amazon.com/images/I/51allUwURLL._AC_SL1024_.jpg',
      description: 'Zacian/Zamazenta Elite Trainer Box',
      cartUrl:
        'https://www.amazon.co.uk/gp/aws/cart/add.html?ASIN.1=B08HJCJT89&Quantity.1=1',
      series: 'sword-and-shield',
      url: 'https://www.amazon.co.uk/gp/product/B08HJCJT89/',
      maxPrice: 65
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
      model: 'etb',
      description: 'Battle Styles Elite Trainer Box',
      thumbnail: 'https://cdn.shopify.com/s/files/1/1381/2481/products/unnamed_11_487b850d-7eb6-458d-a277-c0f6a35286a4.jpg',
      cartUrl:
        'https://www.amazon.co.uk/gp/aws/cart/add.html?ASIN.1=B08QZM514Y&Quantity.1=1',
      series: 'battle-styles',
      url: 'https://www.amazon.co.uk/gp/product/B08QZM514Y/',
      maxPrice: 43
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
      maxPrice: 140
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
