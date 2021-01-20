const product = {
  async get(req, res) {
    try {
      let responseArray = []
      const { productName } = req.body

      const fromParseShops = require('../utils/fromParseShops')
      const getProducts = require('../utils/getProducts')

      for (const shop of fromParseShops) {
        responseArray = responseArray.concat(
          await getProducts(shop, productName)
        )
      }

      res.json({ result: responseArray })
    } catch (e) {
      res.status(500).json({ message: 'Сталася помилка', error: e.message })
    }
  },
}

module.exports = product
