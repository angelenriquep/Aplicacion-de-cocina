'use strict';

// Acoplamiento con infrastructura por el modelo, no hay problema!
module.exports = ({ repository }) => {

  const { ingredientRepository } = repository

  // const { repository: { ingredientRepository } } = container.cradle

  // Crear una funcion que sea persitir y otra que sea buscar
  // y exportarlas.
  const persit = (...args) => ingredientRepository.create(...args)

  return {
    persit,
  }
}
