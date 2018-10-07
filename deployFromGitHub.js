// Spawn a http server and listen for webhook
const express = require('express')
const app = express()
const port = 3000

// support json encoded bodies
const bodyParser = require('body-parser')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

// https://api.elkia.club/service/cache/update
app.post('/service/cache/update', function (req, res) {
  console.log(req.body)
  res.send(req.body.zen)
})

app.listen(port, () => console.log(`ElkiaCache listening for updates on :${port}!`))
