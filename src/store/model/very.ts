import {Link, Store} from './store';
import {logger} from '../../logger';
import {parseCard} from './helpers/card';

export const Very: Store = {
  backoffStatusCodes: [403],
  currency: '£',
  labels: {
    inStock: {
      container: '.stockMessaging .indicator',
      text: ['available', 'low stock'],
    },
    maxPrice: {
      container: '.priceNow',
      euroFormat: false, // Note: Very uses non-euroFromat as price seperator
    },
    outOfStock: {
      container: '.stockMessaging .indicator',
      text: ['pre-order'],
    },
  },
  links: [
    {
      brand: 'pokemon',
      model: 'triple-booster',
      series: 'battle-styles',
      url:
        'https://www.very.co.uk/pokemon-pokemon-trading-card-game-sword-shield-5-battle-styles-3-pack-booster-display-only-1-supplied/1600582227.prd',
    },
  ],
  linksBuilder: {
    builder: (docElement, series) => {
      const productElements = docElement.find('.productList .product');
      const links: Link[] = [];
      for (let i = 0; i < productElements.length; i++) {
        const productElement = productElements.eq(i);
        const titleElement = productElement.find('.productTitle').first();
        const title = titleElement.text()?.replace(/\n/g, ' ').trim();

        if (
          !title ||
          ['RTX', series]
            .map(x => title.toLowerCase().includes(x.toLowerCase()))
            .filter(x => !x).length > 0
        ) {
          continue;
        }

        const url = titleElement.attr()?.href;

        if (!url) {
          continue;
        }

        const card = parseCard(title);

        if (card) {
          links.push({
            brand: card.brand as any,
            model: card.model,
            series,
            url,
          });
        } else {
          logger.error(`Failed to parse card: ${title}`, {url});
        }
      }

      return links;
    },
    ttl: 300000,
    urls: [
      {
        series: 'test:series',
        url:
          'https://www.very.co.uk/electricals/pc-components/graphics-cards/e/b/118786.end?sort=newin,0&numProducts=100',
      },
    ],
  },
  name: 'Very',
  postage: 0,
};
