const mongoose = require('mongoose')
require('dotenv').config()


mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => console.log('DB is also working'))
    .catch(err => console.error(err));

module.exports.Book = require('./books')