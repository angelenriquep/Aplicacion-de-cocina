'use strict';

const { toEntity } = require('./transform')

module.exports = ({ model }) => {
  const create = (...args) =>
    model.create(...args).then(({ dataValues }) => toEntity(dataValues))

  return {
    create,
  }
}
