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
    {
      brand: 'pokemon',
      model: 'etb',
      description: "Celebrations Elite Trainer Box",
      thumbnail: 'https://www.amazon.co.uk/images/I/71WbvHF6uHL._AC_SL1500_.jpg',
      cartUrl:
        'https://www.amazon.co.uk/gp/aws/cart/add.html?ASIN.1=B09DGRDDNP&Quantity.1=1',
      series: 'celebrations',
      url: 'https://www.amazon.co.uk/gp/product/B09DGRDDNP/',
      maxPrice: 55
    },
    {
      brand: 'pokemon',
      model: 'etb',
      description: "Celebrations Elite Trainer Box",
      thumbnail: 'https://www.amazon.co.uk/images/I/71WbvHF6uHL._AC_SL1500_.jpg',
      cartUrl:
        'https://www.amazon.co.uk/gp/aws/cart/add.html?ASIN.1=B0981BNN9M&Quantity.1=1',
      series: 'celebrations',
      url: 'https://www.amazon.co.uk/gp/product/B0981BNN9M/',
      maxPrice: 55
    },
    {
      brand: 'pokemon',
      model: 'box',
      description: "Dragapult Prime Collection",
      thumbnail: 'https://www.amazon.co.uk/images/I/91D3TumUT5L._AC_SL1500_.jpg',
      cartUrl:
        'https://www.amazon.co.uk/gp/aws/cart/add.html?ASIN.1=B0981C6N34&Quantity.1=1',
      series: 'celebrations',
      url: 'https://www.amazon.co.uk/gp/product/B0981C6N34/',
      maxPrice: 16
    },
    {
      brand: 'pokemon',
      model: 'box',
      description: "Celebrations Deluxe Pin Box",
      thumbnail: 'https://www.amazon.co.uk/images/I/818Op35fTxL._AC_SL1500_.jpg',
      cartUrl:
        'https://www.amazon.co.uk/gp/aws/cart/add.html?ASIN.1=B0981BVNCR&Quantity.1=1',
      series: 'celebrations',
      url: 'https://www.amazon.co.uk/gp/product/B0981BVNCR/',
      maxPrice: 22
    },
    {
      brand: 'pokemon',
      model: 'box',
      description: "Celebrations Pikachu Vmax Premium Figure Box",
      thumbnail: 'https://www.amazon.co.uk/images/I/413hv7zvCfL._AC_.jpg',
      cartUrl:
        'https://www.amazon.co.uk/gp/aws/cart/add.html?ASIN.1=B09DGQHLB3&Quantity.1=1',
      series: 'celebrations',
      url: 'https://www.amazon.co.uk/gp/product/B09DGQHLB3/',
      maxPrice: 55
    },
    {
      brand: 'pokemon',
      model: 'box',
      description: "Celebrations Collectors Chest",
      thumbnail: 'https://www.amazon.co.uk/images/I/81e9ZGO81DL._AC_SL1500_.jpg',
      cartUrl:
        'https://www.amazon.co.uk/gp/aws/cart/add.html?ASIN.1=B0984S8NSF&Quantity.1=1',
      series: 'celebrations',
      url: 'https://www.amazon.co.uk/gp/product/B0984S8NSF/',
      maxPrice: 27
    },
    {
      brand: 'pokemon',
      model: 'box',
      description: "Celebrations Ultra Premium Collection Box",
      thumbnail: 'https://www.amazon.co.uk/images/I/319AMsbgovL._AC_.jpg',
      cartUrl:
        'https://www.amazon.co.uk/gp/aws/cart/add.html?ASIN.1=B09DGVSHP8&Quantity.1=1',
      series: 'celebrations',
      url: 'https://www.amazon.co.uk/gp/product/B09DGVSHP8/',
      maxPrice: 200
    },
    {
      brand: 'pokemon',
      model: 'box',
      description: "Celebrations Special Collection Pikachu V- Union",
      thumbnail: 'https://www.amazon.co.uk/images/I/81pzo5IxBCL._AC_SL1500_.jpg',
      cartUrl:
        'https://www.amazon.co.uk/gp/aws/cart/add.html?ASIN.1=B0981DRXGP&Quantity.1=1',
      series: 'celebrations',
      url: 'https://www.amazon.co.uk/gp/product/B0981DRXGP/',
      maxPrice: 33
    },
    {
      brand: 'pokemon',
      model: 'box',
      description: "Celebrations V Box",
      thumbnail: 'https://www.amazon.co.uk/images/I/51-HVhL6dUS._AC_.jpg',
      cartUrl:
        'https://www.amazon.co.uk/gp/aws/cart/add.html?ASIN.1=B0981BSM8M&Quantity.1=1',
      series: 'celebrations',
      url: 'https://www.amazon.co.uk/gp/product/B0981BSM8M/',
      maxPrice: 22
    },
  ],
  name: 'Amazon',
  postage: 0,
};
