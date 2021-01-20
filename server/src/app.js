const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')
const path = require('path')

const app = express()
app.use(morgan('combined'))
app.use(bodyParser.json())
app.use(
  cors({
    origin: ['http://localhost:8080', 'https://localhost:8080'],
  })
)

app.use('/api', require('./routes/product'))

// app.use('/api/', authRoutes)

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('../../client/build'))

  app.get('*', (req, res) => {
    res.sendFile(
      path.join(__dirname, '../../', 'client', 'build', 'index.html')
    )
  })
}

app.listen(process.env.PORT || 8090)
