'use strict';

module.exports = ({ ingredientCreator }) => {
  // Los comandos no retornan!
  // Si falla reencolo
  async function handle(command) {
    var { id, name } = command;
    await ingredientCreator.run({ id, name });
  }
}
