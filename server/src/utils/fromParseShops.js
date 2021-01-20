const formParseShop = [
  {
    name: 'Новус',
    url: 'https://novus.zakaz.ua',
    prefixUrl: 'ru/categories/',
    endProductName: '/',
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
    prefixUrl: 'ru/categories/',
    endProductName: '-auchan/',
    find: {
      product: 'div.products-box__list-item',
      name: 'span.product-tile__title',
      price: 'span.Price__value_caption',
      weight: 'div.product-tile__weight',
    },
  },
]

module.exports = formParseShop
