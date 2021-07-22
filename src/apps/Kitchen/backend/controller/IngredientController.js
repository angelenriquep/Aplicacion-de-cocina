'use strict';

var router = require('express').Router();
var httpStatus = require('http-status');
var { CreateIngredientCommand } = require('../../../../Context/Kitchen/Ingredients/application');
var { IngredientAlreadyExists } = require('../../../../Context/Kitchen/Ingredients/domain');

module.exports = ({ commandBus }) => {
  router.put('/:id', async function(req, res) {
    var { id } = req.params
    var { name } = req.body
  
    // Hace las validaciones de applicacion y devuelve un DTO
    var createIngredientCommand = CreateIngredientCommand(id, name);
  
    try {
      await commandBus.dispatch(createIngredientCommand);
    } catch (error) {
      // Si los comandos no retornan nada, como sabemos que no existe?
      // if (error instanceof IngredientAlreadyExists) {
      //   res.status(httpStatus.BAD_REQUEST).send(error.message);
      // }

      res.status(httpStatus.INTERNAL_SERVER_ERROR).json(error);
    }

    res.status(httpStatus.CREATED).send()
  });

  return router
}

