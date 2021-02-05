//3rd party libraries
const express = require('express')
const mongoose = require('mongoose')

//importing files
const memeRoute = require('./routes/memes')

//string url for database
const url = 'mongodb+srv://manthan109:<Revolt@1847>@cluster0.i0kwb.mongodb.net/<MemeDB>?retryWrites=true&w=majority'

const app = express()

//connecting application to database
mongoose.connect(url, { useNewUrlParser: true })
const con = mongoose.connection

con.on('open', () => {
    console.log('connected...')
})

//middleware functions

app.use(express.json())

app.use('/memes', memeRoute)

//listening to port 8081
app.listen(8081, () => {
    console.log('server started')
})