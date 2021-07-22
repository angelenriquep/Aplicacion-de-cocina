'use strict';

// use case
const { Ingredient } = require('../domain/Ingredient')

module.exports = ({ ingredientRepository, eventBus }) => {
  const create = ({ body }) => {
    return Promise
      .resolve()
      .then(async () => {
        const ingredient = Ingredient(body)
        await ingredientRepository.create(ingredient)

        // dto?
        eventBus.emit('ingrdient created', {} )
      })
      .catch((error) => {
        throw new Error(error)
      })
  }

  return {
    create
  }
}
 