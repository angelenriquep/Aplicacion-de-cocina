const Ingredient = require('./Ingredient')

module.exports = ({ database }) => {
  const ingredientModel = database.sequelize.models.ingredients

  return {
    ingredientRepository: Ingredient({ model: ingredientModel }),
  }
}
