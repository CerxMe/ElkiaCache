// Spawn a http server and listen for webhook
const express = require('express')
const app = express()
const port = 3000

app.put('/someRouteToCatchWebHook', function(request, response) {
  // webhook parsing goes here
});

app.listen(port, () => console.log(`ElkiaCache listening for deployment on ${port}!`))