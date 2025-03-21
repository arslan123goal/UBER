const express = require('express')
const app = express()
const dotenv = require('dotenv')
dotenv.config()
const cors = require('cors')
const cookieParser = require('cookie-parser')
const connectToDb = require('./db/db')
const userRoutes = require('./routes/user.routes')
const captainRoutes = require('./routes/captain.routes')
const mapsRoutes = require('./routes/maps.route')


connectToDb()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cookieParser())

app.get('/', (req, res) => {
    res.send("hello")
})

app.use('/users', userRoutes)
app.use('/captains', captainRoutes)
app.use('/maps', mapsRoutes)

module.exports = app