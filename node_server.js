var express = require('express')
var url = require('url')
var app  = express()
var path = require('path')
var config = require('./config.json')
var port = config.port


app.use(express.static(__dirname + '/'))

app.listen(port)