const sequelize = require('../sequelize')

module.exports = ({ config }) => {
  if (!config.db) {
    /* eslint-disable no-console */
    console.error('Database config file log not found, disabling database.')
    /* eslint-enable no-console */
    return false
  }

  return sequelize({ config, basePath: __dirname })
}
