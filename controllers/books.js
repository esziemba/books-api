const router = require('express').Router()
const db = require('../models')


router.get('/seed', (req, res) => {
    db.Book.insertMany([{
        "title": "The Shinobi Initiative",
        "description": "The reality-bending adventures of a clandestine service agency in the year 2166",
        "year": 2014,
        "quantity": 10,
        "imageURL": "https://imgur.com/LEqsHy5.jpeg"
      },
      {
        "title": "Tess the Wonder Dog",
        "description": "The tale of a dog who gets super powers",
        "year": 2007,
        "quantity": 3,
        "imageURL": "https://imgur.com/cEJmGKV.jpg"
      },
      {
        "title": "The Annals of Arathrae",
        "description": "This anthology tells the intertwined narratives of six fairy tales.",
        "year": 2016,
        "quantity": 8,
        "imageURL": "https://imgur.com/VGyUtrr.jpeg"
      },
      {
        "title": "Wâˆ€RP",
        "description": "A time-space anomaly folds matter from different points in earth's history in on itself, sending six unlikely heroes on a race against time as worlds literally collide.",
        "year": 2010,
        "quantity": 4,
        "imageURL": "https://imgur.com/qYLKtPH.jpeg"
      }])
        .then(res.status(200).json({
            message: 'Seed successful'
        }))
        .catch(res.status(400).json({
            message: 'Seed unsuccessful'
        }))
})


//GET all books
router.get('/', async (req, res) => {
    try {
        const book = await db.Book.find()
        res.json(book)
    } catch (error) {
        console.log(error)
        res.json({'message':'Error'})
    }
})

//GET one book by id
router.get('/:id', async (req, res) => {
    let id = req.params.id
    try {
        const book = await db.Book.findById(id)
        res.json(book)
    } catch (error) {
        console.log(error)
        res.json({'message':'Error'})
    }
})

//PUT one book by id
router.put('/:id', async (req, res) => {
    let id = req.params.id
    try {
        await db.Book.findByIdAndUpdate(id, req.body)
        const book = await db.Book.findById(id)
        res.json(book)
        // res.send('Book updated')
    } catch (error) {
        console.log(error)
        res.json({'message':'Error'})
    }
})


//POST one book
router.post('/', async (req, res) => {
    try {
        await db.Book.create(req.body)
        res.send('Book added')
        
    } catch (error) {
        console.log(error)
        res.json({'message':'Error'})
    }
})

//DELETE one book by id
router.delete('/:id', async (req, res) => {
    let id = req.params.id
    try {
        await db.Book.findByIdAndDelete(id)
        res.send(`Book id ${id} has been deleted.`)
    } catch (error) {
        console.log(error)
        res.json({'message':'Error'})
    }
})

module.exports = router