const osmosis = require('osmosis')

const getProducts = (shop, productName) => {
  return new Promise((resolve, reject) => {
    let response = []
    const fromUrl =
      shop.url + '/' + shop.prefixUrl + shop.nameSearch[productName]
    osmosis
      .get(fromUrl)
      .find(shop.find.product)
      .set({
        url: 'a@href',
        productName: shop.find.name,
        productPrice: shop.find.price,
        productWeight: shop.find.weight,
      })
      .data(data =>
        response.push({
          ...data,
          shopName: shop.name,
        })
      )
      .error(err => reject(err))
      .done(() => resolve(response))
  })
}

module.exports = getProducts
