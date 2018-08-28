var express = require('express')
var url = require('url')
var app  = express()
var path = require('path')

app.use(express.static(__dirname + '/'))

app.listen(8080)