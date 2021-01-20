const { Router } = require('express')

const router = Router()

router.get('/product', async (req, res) => {
  try {
    let responseArray = []
    const { productName } = req.body

    const fromParseShops = require('./fromParseShops')
    const getProducts = require('./getProducts')

    for (const shop of fromParseShops) {
      responseArray = responseArray.concat(await getProducts(shop, productName))
    }

    res.json({ result: responseArray })
  } catch (e) {
    res.status(500).json({ message: 'Сталася помилка', error: e.message })
  }
})

module.exports = router
