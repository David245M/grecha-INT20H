const formParseShop = [
  // {
  //   name: 'Новус',
  //   url: 'https://novus.zakaz.ua',
  //   nameSearch: {
  //     "buckwheat": "buckwheat/"
  //   },
  //   prefixUrl: 'ru/categories/',
  //   find: {
  //     product: 'div.products-box__list-item',
  //     name: 'span.product-tile__title',
  //     price: 'span.Price__value_caption',
  //     weight: 'div.product-tile__weight',
  //   },
  // },
  // {
  //   name: 'Ашан',
  //   url: 'https://auchan.zakaz.ua',
  //   nameSearch: {
  //     "buckwheat": "buckwheat-auchan/"
  //   },
  //   prefixUrl: 'ru/categories/',
  //   find: {
  //     product: 'div.products-box__list-item',
  //     name: 'span.product-tile__title',
  //     price: 'span.Price__value_caption',
  //     weight: 'div.product-tile__weight',
  //   },
  // },
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
  {
    name: 'FoodLogistic',
    url: 'https://foodlogistic.com.ua',
    nameSearch: {
      buckwheat: '%D0%B3%D1%80%D0%B5%D1%87%D0%B0%D0%BD%D0%B0+%D0%BA%D1%80%D1%83%D0%BF%D0%B0',
    },
    prefixUrl: 'katalog/search/?q=',
    find: {
      product: 'li.catalog-grid__item',
      name: 'div.catalogCard-title a',
      price: 'div.catalogCard-price',
      weight: 'div.catalogCard-price',
    },
  },
]

module.exports = formParseShop
