const express = require('express')
const app = express()
const port = 3000
const bodyParser = require('body-parser')
const api = require('./api')


app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use( '/', api )



app.listen(port, function(){
    console.log(`Running server on port ` + port)
})
