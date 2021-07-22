'use strict';

const { createContainer, asValue, asFunction } = require('awilix')

const config = require('../config');
const app = require('./apps/Kitchen/backend/index');
const server = require('./apps/Kitchen/backend/server');
const router = require('./apps/Kitchen/backend/router');
const database = require('./Context/Shared/infrastructure/persistence/database');
const eventBus = require('./Context/Shared/domain/EventBus/EventBus');
const commandBus = require('./Context/Shared/infrastructure/commandBus/commandBus');
const { IngredientCreator } = require('./Context/Kitchen/Ingredients/application');
const IngredientRepository = require('./Context/Kitchen/Ingredients/infrastructure/persistence/IngredientRepository');

const container = createContainer()

container
  .register({
    app: asFunction(app).singleton(),
    server: asFunction(server).singleton(),
    router: asFunction(router).singleton(),
    database: asFunction(database).singleton(),
    config: asValue(config),
    eventBus: asFunction(eventBus).singleton(),
    commandBus: asFunction(commandBus).singleton(),
    ingredientCreator: asFunction(IngredientCreator).singleton(),
    ingredientRepository: asFunction(IngredientRepository).singleton(),
  })

module.exports = container
