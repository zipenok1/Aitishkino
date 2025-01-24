require('dotenv').config();
const express = require('express')
const sequelize = require('./db')
const moduls = require('./models/models')
const router = require('./routes/index')
const fileUpload = require('express-fileupload')
const errorHanding = require('./middleware/ErrorHandingMiddleware')
const path = require('path')
const cors = require('cors')

const app = express()
app.use(cors())
app.use(express.json())
app.use(express.static(path.resolve(__dirname, 'static')))
app.use(fileUpload({}))
app.use('/api', router)

// обработка ошибки
app.use(errorHanding)

const start = async () => {
    try{
        await sequelize.authenticate()
        await sequelize.sync()
        app.listen(3000, () => {console.log('сервер запущен');})
    } catch (e) {
        console.log(e);
    }
}
start()
