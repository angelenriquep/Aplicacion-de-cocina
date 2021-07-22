const statusMonitor = require('express-status-monitor')
const cors = require('cors')
const bodyParser = require('body-parser')
const compression = require('compression')

const { Router } = require('express')

const IngredientController = require('./controller/IngredientController')

// Es correcto que el router le pase el commandBus aguas abajo?
module.exports = ({ config, commandBus }) => {
  const router = Router()

  /* istanbul ignore if */
  if (config.env === 'development') {
    router.use(statusMonitor())
  }

  const apiRouter = Router()

  apiRouter
    .use(cors({
      origin: [
        //'http://localhost:3000'
      ],
      methods: ['GET', 'POST', 'PUT', 'DELETE'],
      allowedHeaders: ['Content-Type', 'Authorization']
    }))
    .use(bodyParser.json())
    .use(compression())


  apiRouter.use('/ingredient', IngredientController({ commandBus }))
  
  router.use(`/api/${config.version}`, apiRouter)

  return router
}
