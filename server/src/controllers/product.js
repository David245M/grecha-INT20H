const puppeteer = require('puppeteer');

const product = {
  async get(req, res) {
    try {
      let responseArray = []
      const productName = req.get('productName')
      const fromParseShops = require('../utils/fromParseShops')
      const getProducts = require('../utils/getProducts')

      const result = await getHtml('https://fozzyshop.ua/ru/300143-krupa-grechnevaya')

      res.json({ result })
    } catch (e) {
      res.status(500).json({ message: 'Сталася помилка', error: e })
    }
  },
}

async function getHtml(url) {
  const urls = ['https://fozzyshop.ua/ru/300143-krupa-grechnevaya', 'https://goverla.ua/']
  const browser = await puppeteer.launch({ headless: false, args: ['--no-sandbox', '--disable-setuid-sandbox'] })
  const pagesContent = {}

  const openNewPage = (url) => {
    return new Promise (async (resolve, reject) => {
      try {
        const page = await browser.newPage()
        await page.goto(url, { waitUntil: "networkidle2" })
        pagesContent[url] = await page.content()
        resolve()
      } catch (e) {
        console.log('errrrrrrrrrrslkghlskgh', e)
        reject(e)
      }
    })
  }

  const promises = []
  for (let url of urls) {
    promises.push(openNewPage(url))
  }

  try {
    await Promise.allSettled(promises)
    await browser.close()
  } catch (e) {
    throw e
  }



  return pagesContent
}

module.exports = product
