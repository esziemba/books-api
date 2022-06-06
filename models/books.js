const mongoose = require('mongoose')

let bookSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String },
    year: { type: Number },
    quantity: { type: Number, required: true },
    imageURL: { type: String }
})

module.exports = mongoose.model('Book', bookSchema)