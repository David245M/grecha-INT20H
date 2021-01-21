const osmosis = require('osmosis')

const getFormatWeight = productWeight => {
  if (productWeight.includes('кг')) {
    if (productWeight.split(' ')[0] === 'за') {
      return +productWeight.split(' ')[1] * 1000
    } else if (productWeight.includes('Фасовка:')) {
      return +productWeight.split(' ')[1].split('кг')[0]
    } else {
      return productWeight.split(' ')[0] * 1000
    }
  } else if (productWeight.includes('г')) {
    if (productWeight.includes('Фасовка:')) {
      return +productWeight.split(' ')[1].split('г')[0]
    } else {
      return +productWeight.split(' ')[0]
    }
  } else {
    return productWeight
  }
}

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
      .data(data => {
        response.push({
          ...data,
          url: data.url.includes('https') ? data.url : shop.url + data.url,
          productWeightFormat: getFormatWeight(data.productWeight),
          shopName: shop.name,
        })
      })
      .error(err => reject(err))
      .done(() => resolve(response))
  })
}

module.exports = getProducts
