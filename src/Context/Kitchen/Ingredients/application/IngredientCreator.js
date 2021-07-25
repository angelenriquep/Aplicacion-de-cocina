'use strict';

// use case
const Ingredient = require('../domain/Ingredient')


// Ingredient Repository deberia tener un metodo persist y un buscar.
// ingredientRepository
module.exports = ({ ingredientRepository, eventBus }) => {
  const run = ({ id, name }) => {
    return Promise
      .resolve()
      .then(async () => {
        const ingredient = Ingredient({ id, name })

        await ingredientRepository.persit(ingredient)
        
        // dto?
        eventBus.emit('event', { id, name, __name: 'INGREDIENT_CREATED' } )

      })
      .catch((error) => {
        throw new Error(error)
      })
  }

  return {
    run
  }
}
 