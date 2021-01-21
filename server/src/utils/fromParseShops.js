const formParseShop = [
  {
    name: 'Новус',
    url: 'https://novus.zakaz.ua',
    nameSearch: {
      "buckwheat": "buckwheat/"
    },
    prefixUrl: 'ru/categories/',
    find: {
      product: 'div.products-box__list-item',
      name: 'span.product-tile__title',
      price: 'span.Price__value_caption',
      weight: 'div.product-tile__weight',
    },
  },
  {
    name: 'Ашан',
    url: 'https://auchan.zakaz.ua',
    nameSearch: {
      "buckwheat": "buckwheat-auchan/"
    },
    prefixUrl: 'ru/categories/',
    find: {
      product: 'div.products-box__list-item',
      name: 'span.product-tile__title',
      price: 'span.Price__value_caption',
      weight: 'div.product-tile__weight',
    },
  },
  {
    name: 'Fozzy',
    url: 'https://fozzyshop.ua/ru',
    nameSearch: {
      buckwheat: '300143-krupa-grechnevaya',
    },
    prefixUrl: '',
    find: {
      product: 'article.product-miniature-default',
      name: 'div.product-title a',
      price: 'span.product-price',
      weight: 'div.product-reference a',
    },
  },
]

module.exports = formParseShop
