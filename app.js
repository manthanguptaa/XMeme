//3rd party libraries
const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const methodOverride = require('method-override')
const swaggerJSDoc = require('swagger-jsdoc')
const swaggerUI = require('swagger-ui-express')
const cors = require('cors')

//importing files
const memeRoute = require('./routes/memes')
const viewRoute = require('./routes/views')
const errorController = require('./controllers/errorController')

//importing core libraries
const path = require('path')

if (process.env.NODE_ENV !== "production") {
    require('dotenv').config()
}

//string url for database
//const dbUrl = process.env.DB_URL || 'mongodb://localhost:27017/MemeDB'
const dbUrl = 'mongodb://localhost:27017/MemeDB'

//Calling express instance
//app is for the application and swaggerApp is for API Documentation
const app = express()
const swaggerApp = express()

//connecting application to database
mongoose.connect(dbUrl, { useNewUrlParser: true }).then(() => {
    console.log('MongoDB is connected')
}).catch(err => {
    console.log('MongoDB connection unsuccessful, retry after 5 seconds.')
    setTimeout(connectWithRetry, 5000)
})
const con = mongoose.connection

con.on('open', () => {
    console.log('connected...')
})

//Settinng EJS as templating engine
app.set('view engine', 'ejs')

//middleware functions
app.use(cors())
swaggerApp.use(cors())

app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.json())

app.use(express.static(path.join(__dirname, 'public')))

app.use(methodOverride('_method'))

// /memes route
app.use('/memes', memeRoute)

// / route
app.use('/', viewRoute)

// Defining definition for swagger api documentation
const swaggerOptions = {
    definition: {
        openapi: '3.0.3',
        info: {
            title: 'XMeme',
            version: '1.0.0',
            description: 'Simple CRUD application',
            'contact': {
                'name': 'Manthan Gupta',
                'email': 'manthangupta109@gmail.com'
            },
        },
        servers: [{
            url: "http://localhost:8081"
        }, {
            url: "https://damp-river-68338.herokuapp.com/"
        }]
    },
    apis: ['./routes/*.js']
}
const specs = swaggerJSDoc(swaggerOptions)

//Swagger api documentation available at localhost:8080/swagger-ui
swaggerApp.use('/swagger-ui', swaggerUI.serve, swaggerUI.setup(specs));
//app.use('/swagger-ui', swaggerUI.serve, swaggerUI.setup(specs));

app.use(errorController.getErrorPage)

//listening to port 8081 and 8080
const port = process.env.PORT || 8081
const swaggerPORT = process.env.PORT || 8080

app.listen(port, () => {
    console.log('server started')
})
swaggerApp.listen(swaggerPORT)