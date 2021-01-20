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
]

module.exports = formParseShop
