'use strict';

const express = require('express')

module.exports = ({ config, router }) => {
  const app = express()

  app.disable('x-powered-by')
  app.use(router)

  app.get('/', function (req, res) {
    res.send('Hello World!')
  })

  // we define our static folder
  // app.use(express.static('public'))

  return {
    app,
    start: () => new Promise((resolve) => {
      const http = app.listen(config.port, () => {
        const { port } = http.address()
        console.info(`🤘 API - Port ${port}`)
      })
    })
  }
}
