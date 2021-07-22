const t = require('tcomb')
const { compose } = require('ramda')

const Ingredient = t.struct({
  id: t.maybe(t.String),
  name: t.String,
})

module.exports = compose(
  Ingredient,
)
