const Events = require('events')

/**
 * Initialize event bus instance
 * 
 * @returns {EventEmitter}
 */
function EventBus () {
  return new Events.EventEmitter()
}

module.exports = EventBus
