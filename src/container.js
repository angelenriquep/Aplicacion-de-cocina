'use strict';

const { createContainer, asValue, asFunction } = require('awilix')

const config = require('../config');
const app = require('./apps/Kitchen/backend/index');
const server = require('./apps/Kitchen/backend/server');
const router = require('./apps/Kitchen/backend/router');
const database = require('./Context/Shared/infrastructure/persistence/database');
const eventBus = require('./Context/Shared/domain/EventBus/EventBus');
const commandBus = require('./Context/Shared/infrastructure/commandBus/commandBus');
const repository = require('./Context/Shared/infrastructure/persistence/repository');
const { IngredientCreator } = require('./Context/Kitchen/Ingredients/application');
const SequelizeIngredientRepository = require('./Context/Kitchen/Ingredients/infrastructure/persistence/SequelizeIngredientRepository')
const ingredientListReadModel = require('./Context/Kitchen/IngredientsCounter/application/increment/IngredientListReadModel')

const container = createContainer()


// Dependecy Injector
container
  .register({
    app: asFunction(app).singleton(),
    server: asFunction(server).singleton(),
    router: asFunction(router).singleton(),
    database: asFunction(database).singleton(),
    config: asValue(config),
    eventBus: asFunction(eventBus).singleton(),
    commandBus: asFunction(commandBus).singleton(),
    repository: asFunction(repository).singleton(),
    ingredientCreator: asFunction(IngredientCreator).singleton(),
    ingredientRepository: asFunction(SequelizeIngredientRepository).singleton(), // aqui es donde cambiamos una implementacio o otra
    ingredientListReadModel: asFunction(ingredientListReadModel).singleton(),
  })

module.exports = container
