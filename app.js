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

//string url for database
const url = 'mongodb://localhost/MemeDB'
//const prodUrl = "mongodb+srv://MemeDB:tBpiAfsCSwxY7zvv@cluster0.iqc9g.mongodb.net/MemeDB?retryWrites=true&w=majority"

const app = express()
const swaggerApp = express()

//connecting application to database
mongoose.connect(url, { useNewUrlParser: true })
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

app.use('/memes', memeRoute)

app.use('/', viewRoute)

app.use(errorController.getErrorPage)

//listening to port 8081
const PORT = process.env.PORT || 8081
const swaggerPORT = process.env.PORT || 8080

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
        }]
    },
    apis: ['./routes/*.js']
}
const specs = swaggerJSDoc(swaggerOptions)

swaggerApp.use('/swagger-ui', swaggerUI.serve, swaggerUI.setup(specs));

swaggerApp.listen(swaggerPORT)
app.listen(PORT, () => {
    console.log('server started')
})