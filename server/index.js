require('dotenv').config()
const sequelize = require('./db')
const express = require('express')
const router = require('./router/index')
const fileUpload = require('express-fileupload')
const path = require('path')
const cors = require('cors')
const errorHanding = require('./middleware/ErrorHandingMiddlewaree')
const models = require('./models/models')

const app = express()
app.use(cors())
app.use(express.json())
app.use(express.static(path.resolve(__dirname, 'static')))
app.use(fileUpload({}))
app.use('/api', router)
app.use(errorHanding)

const start = async () => {
    try{
        await sequelize.authenticate()
        await sequelize.sync()
        app.listen(5000, () => {console.log('сервер запущен');})
    } catch (e) {
        console.log(e);
    }
}
start()