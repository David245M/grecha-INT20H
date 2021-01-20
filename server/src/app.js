const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')

const app = express()
app.use(morgan('combined'))
app.use(bodyParser.json())
app.use(cors({
  origin: [
    'http://localhost:8080',
    'https://localhost:8080'
  ]
}))

// app.use('/api/', authRoutes)


app.listen(process.env.PORT || 8090)
