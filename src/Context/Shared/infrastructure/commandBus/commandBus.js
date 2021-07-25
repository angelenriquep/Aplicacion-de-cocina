'use stric';

module.exports = () => {
  const registeredHandlers = new Map();

  function isHandlerRegistered (commandName) {
    return registeredHandlers.has(commandName);
  }

  function registerHandler (commandName, handler) {
    if (registeredHandlers.has(commandName)) {
      throw new Error('handler already registered')
    }
    registeredHandlers.set(commandName, handler)
  }

  function unregisterHandler (commandName) {
    if (!registeredHandlers.has(commandName)) {
      throw new Error('handler not registered')
    }
    registeredHandlers.delete(commandName)
  }

  async function dispatch (command) {
    var commandName = command.__name
    var handler = registeredHandlers.get(commandName)   
    
    if (!handler) throw new Error('handler not registered')

    try {
      // return await handler.handle(command)
      await handler.handle(command)

    } catch(err){
      console.log(err)
    }
  }

  return {
    isHandlerRegistered,
    registerHandler,
    unregisterHandler,
    dispatch
  }
}
