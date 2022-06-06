const express = require('express')
require('dotenv').config()
const mongoose = require('mongoose')
const bookRoutes = require('./controllers/books')
const PORT = process.env.PORT || 3000
const cors = require('cors')

const app = express()
app.use(cors())
app.use(express.json())

app.get('/', (req, res) => {
    res.send('Welcome to the Books API')
  })

app.use('/books', bookRoutes)

app.listen(PORT, () => console.log(`Its working ${PORT}`))