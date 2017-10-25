var express = require('express')
var path = require('path')

var app = express()

var rootPath = path.normalize(__dirname) + '/../'
var bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

app.use(express.static(rootPath + '/app'))
app.use(express.static(__dirname + '/app'))
app.use(express.static(__dirname + '/app/assets/images'))

app.get('/*', function (req, res) { res.sendFile(path.resolve('app/index.html')) })

app.set('port', (process.env.PORT || 5000))
app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'))
})
