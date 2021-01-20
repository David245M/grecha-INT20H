const { Router } = require('express')

const router = Router()

router.get('/product', require('../controllers/product').get)

module.exports = router
