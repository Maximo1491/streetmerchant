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
      cartUrl:
        'https://www.amazon.co.uk/gp/aws/cart/add.html?ASIN.1=B08R84814V&Quantity.1=1',
      series: 'battle-styles',
      url: 'https://www.amazon.co.uk/Pokémon-TCG-Shield-Battle-Booster/dp/B08R84814V/',
      maxPrice: 110
    },
    {
      brand: 'pokemon',
      model: 'tin',
      description: 'Hidden Fates Random Tin',
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
      cartUrl:
        'https://www.amazon.co.uk/gp/aws/cart/add.html?ASIN.1=B07SPJY3YR&Quantity.1=1',
      series: 'hidden-fates',
      url: 'https://www.amazon.co.uk/Pokémon-POK80473-TCG-Trainer-Colours/dp/B07SPJY3YR/',
      maxPrice: 60
    },
    {
      brand: 'pokemon',
      model: 'tin',
      description: 'Hidden Fates Raichu Tin',
      cartUrl:
        'https://www.amazon.co.uk/gp/aws/cart/add.html?ASIN.1=B07XTKBCN9&Quantity.1=1',
      series: 'hidden-fates',
      url: 'https://www.amazon.co.uk/Pokemon-Hidden-Raichu-Collectors-Booster/dp/B07XTKBCN9/',
      maxPrice: 25
    },
    {
      brand: 'pokemon',
      model: 'tin',
      description: 'Hidden Fates Charizard Tin',
      cartUrl:
        'https://www.amazon.co.uk/gp/aws/cart/add.html?ASIN.1=B07XTKQBZG&Quantity.1=1',
      series: 'hidden-fates',
      url: 'https://www.amazon.co.uk/Pokemon-Hidden-Charizard-Collectors-Booster/dp/B07XTKQBZG/',
      maxPrice: 25
    },
    {
      brand: 'pokemon',
      model: 'tin',
      description: 'Hidden Fates Gyarados Tin',
      cartUrl:
        'https://www.amazon.co.uk/gp/aws/cart/add.html?ASIN.1=B07XTJV8DC&Quantity.1=1',
      series: 'hidden-fates',
      url: 'https://www.amazon.co.uk/Pokemon-Hidden-Gyarados-Collectors-Booster/dp/B07XTJV8DC/',
      maxPrice: 25
    },
    {
      brand: 'pokemon',
      model: 'tin',
      description: 'Hidden Fates 3x Tins',
      cartUrl:
        'https://www.amazon.co.uk/gp/aws/cart/add.html?ASIN.1=B07VND1BJF&Quantity.1=1',
      series: 'hidden-fates',
      url: 'https://www.amazon.co.uk/Pokemon-Hidden-Fates-Tins/dp/B07VND1BJF/',
      maxPrice: 75
    },
    {
      brand: 'pokemon',
      model: 'etb',
      description: 'Shining Fates Elite Trainer Box',
      cartUrl:
        'https://www.amazon.co.uk/gp/aws/cart/add.html?ASIN.1=B08PS2F9RD&Quantity.1=1',
      series: 'shining-fates',
      url: 'https://www.amazon.co.uk/Pokémon-TCG-Shining-Fates-Trainer/dp/B08PS2F9RD/',
      maxPrice: 60
    },
    {
      brand: 'pokemon',
      model: 'mini-tin',
      description: 'Shining Fates Mini Tin',
      cartUrl:
        'https://www.amazon.co.uk/gp/aws/cart/add.html?ASIN.1=B08PTTVLBJ&Quantity.1=1',
      series: 'shining-fates',
      url: 'https://www.amazon.co.uk/Pokémon-TCG-Shining-Fates-random/dp/B08PTTVLBJ/',
      maxPrice: 12
    },
    {
      brand: 'pokemon',
      model: 'box',
      description: 'Shining Fates Random Mad Party Pin Collection',
      thumbnail: 'https://images-na.ssl-images-amazon.com/images/I/71LmmJrFwkL._AC_SL1000_.jpg',
      cartUrl:
        'https://www.amazon.co.uk/gp/aws/cart/add.html?ASIN.1=B08PTV374B&Quantity.1=1',
      series: 'shining-fates',
      url: 'https://www.amazon.co.uk/Pokémon-TCG-Shining-Collection-random/dp/B08PTV374B/',
      maxPrice: 18
    },
    {
      brand: 'pokemon',
      model: 'box',
      description: 'Shining Fates Pikachu V Box',
      cartUrl:
        'https://www.amazon.co.uk/gp/aws/cart/add.html?ASIN.1=B08PS15TSH&Quantity.1=1',
      series: 'shining-fates',
      url: 'https://www.amazon.co.uk/Pokémon-TCG-Shining-Fates-Pikachu/dp/B08PS15TSH/',
      maxPrice: 25
    },
    {
      brand: 'pokemon',
      model: 'box',
      description: 'Shining Fates Crobat/Dragapult Premium Collection',
      cartUrl:
        'https://www.amazon.co.uk/gp/aws/cart/add.html?ASIN.1=B08PSBQPTV&Quantity.1=1',
      series: 'shining-fates',
      url: 'https://www.amazon.co.uk/Pokémon-TCG-Shining-Collection-Dragapult/dp/B08PSBQPTV/',
      maxPrice: 48
    },
    {
      brand: 'pokemon',
      model: 'tin',
      description: 'Shining Fates Random Tin',
      cartUrl:
        'https://www.amazon.co.uk/gp/aws/cart/add.html?ASIN.1=B08PS582QY&Quantity.1=1',
      series: 'shining-fates',
      url: 'https://www.amazon.co.uk/Pokémon-TCG-Shining-Fates-Tin-Multicolor/dp/B08PS582QY/',
      maxPrice: 30
    },
    {
      brand: 'pokemon',
      model: 'etb',
      description: 'Zacian/Zamazenta Elite Trainer Box',
      cartUrl:
        'https://www.amazon.co.uk/gp/aws/cart/add.html?ASIN.1=B08HJCJT89&Quantity.1=1',
      series: 'sun-and-moon',
      url: 'https://www.amazon.co.uk/Pokemon-POK82743-Pokémon-TCG-Zamazenta/dp/B08HJCJT89/',
      maxPrice: 75
    },
    {
      brand: 'pokemon',
      model: 'etb',
      description: 'Zacian and Zamazenta Ultra Premium Collection',
      cartUrl:
        'https://www.amazon.co.uk/gp/aws/cart/add.html?ASIN.1=B08HJ86Y8T&Quantity.1=1',
      series: 'sun-and-moon',
      url: 'https://www.amazon.co.uk/Pokémon-POK80742-TCG-Zamazenta-Collection/dp/B08HJ86Y8T/',
      maxPrice: 120
    },
  ],
  name: 'Amazon',
  postage: 0,
};
