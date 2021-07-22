
function CreateIngredientCommand (id, name) {
  if (!id) {
    throw new Error('invalid id param')
  }

  if (!name) {
    throw new Error('invalid name param')
  }

  const __name = 'INGREDIENT_CREATED'

  return {
    __name,
    id,
    name,
  }
}

module.exports = CreateIngredientCommand
