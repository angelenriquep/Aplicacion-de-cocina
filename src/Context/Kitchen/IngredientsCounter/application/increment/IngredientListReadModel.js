'use strict';

module.exports = ({ eventBus }) => {
  function onCustomerCreatedEvent (event) {
    console.log('RECIBO EVENTO', event)
  }

  function onEvent (event) {
    switch (event.__name) {
      case 'INGREDIENT_CREATED':
        return onCustomerCreatedEvent(event)
    }
  }

  eventBus.on('event', onEvent)
}
