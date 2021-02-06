//3rd party libraries
const express = require('express')
const mongoose = require('mongoose')

//importing files
const memeRoute = require('./routes/memes')
const viewRoute = require('./routes/views')

//importing core libraries
const path = require('path')

//string url for database
const url = 'mongodb://localhost/MemeDB'

const app = express()

//connecting application to database
mongoose.connect(url, { useNewUrlParser: true })
const con = mongoose.connection

con.on('open', () => {
    console.log('connected...')
})

//Settinng EJS as templating engine
app.set('view engine', 'ejs')

//middleware functions

app.use(express.json())

app.use(express.static(path.join(__dirname, 'public')))

app.use('/memes', memeRoute)

app.use('/', viewRoute)

//listening to port 8081
app.listen(8081, () => {
    console.log('server started')
})