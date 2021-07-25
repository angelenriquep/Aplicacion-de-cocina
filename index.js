'use strict';
const container = require('./src/container');
const app = container.resolve('app');



const CreateIngredientCommandHandler = require ('./src/Context/Kitchen/Ingredients/application/CreateIngredientCommandHandler')
const commandBus = container.resolve('commandBus');
const ingredientCreator = container.resolve('ingredientCreator');
commandBus.registerHandler('INGREDIENT_CREATED', CreateIngredientCommandHandler({ingredientCreator}))
container.resolve('ingredientListReadModel')

app
  .start()
  .catch((error) => {
    app.logger.error(error.stack)
    process.exit()
  })
