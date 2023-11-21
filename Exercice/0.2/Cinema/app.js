var express = require('express')
var path = require('path')
var cookieParser = require('cookie-parser')
var logger = require('morgan')

var cinemaRouter = require('./routes/Cinema')

var app = express()

let getCounter = 0
let getCounterCinema = 0
let postCounter = 0
let deleteCounter = 0
app.use((req, res, next) => {
    console.log(req.method)
    let url = req.url
    console.log(req.url)

    if (req.method == 'GET') {
        getCounter++
        if (url == '/cinema') {
            getCounterCinema++
        }
    } else if (req.method == 'POST' && url == '/cinema') {
        postCounter++
    } else if (req.method == 'DELETE' && url == '/cinema') deleteCounter++

    console.log('GET / : ' + getCounter)
    console.log('GET /cinema : ' + getCounterCinema)
    console.log('POST /cinema : ' + postCounter)
    console.log('DELETE /cinema : ' + deleteCounter)
    next()
})

app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(express.static(path.join(__dirname, 'public')))

app.use('/cinema', cinemaRouter)

module.exports = app
