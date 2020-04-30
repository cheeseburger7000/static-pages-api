const express = require('express')
const app = express()
const idiomsRouter = require('./routes/idioms')
const hotSearchRouter = require('./routes/hotSearch')
const mongoose = require('mongoose')
var cors = require('cors')

app.use(express.json())
app.use(cors())

app.use('/idioms', idiomsRouter)
app.use('/hotSearch', hotSearchRouter)

const MONGODB_URI = `mongodb://shaohsiung:shaohsiung@119.23.40.171:27017/default`

mongoose.connect(MONGODB_URI, 
    { useNewUrlParser: true, useUnifiedTopology: true }, 
    () => console.log('Connected to MongoDB.'));

app.listen(3000, () => console.log('Applcation Start on PORT 3000 ...'))