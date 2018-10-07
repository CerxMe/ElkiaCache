module.exports.run = function () {
// Spawn a http server and listen for webhook
  const express = require('express')
  const app = express()
  const port = 3000

// support json encoded bodies
  const bodyParser = require('body-parser')
  app.use(bodyParser.json())
  app.use(bodyParser.urlencoded({extended: true}))

// To call a shell later
  const sys = require('sys')
  const exec = require('child_process').exec

// https://api.elkia.club/service/cache/update
  app.post('/service/cache/update', function (req, res) {
    console.log('github webhook')
    exec('bash delpoy.sh', function (error, stdout, stderr) {
      if (error) {
        console.log(error.code)
      }
    })
    res.send(req.body.zen)
  })

  return app.listen(port, () => console.log(`ElkiaCache listening for updates on :${port}!`))
}
