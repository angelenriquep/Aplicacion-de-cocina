const fs = require('fs')
const path = require('path')
const Sequelize = require('sequelize')

module.exports = ({ config, basePath }) => {
  const sequelize = new Sequelize(
    config.db.url,
    // we have to remove the depraction warning
    // https://github.com/sequelize/sequelize/issues/8417
    { ...config.db }
  )

  const db = {
    sequelize,
    Sequelize,
    models: {}
  }

  const dir = path.join(basePath, '../database/models')

  fs
    .readdirSync(dir)
    .filter(file => {
      return (file.indexOf('.') !== 0) && (file.slice(-3) === '.js');
    })
    .forEach(file => {
      const model = require(path.join(dir, file))(sequelize, Sequelize.DataTypes);
      db[model.name] = model;
    });

  Object.keys(db).forEach(modelName => {
    if (db[modelName].associate) {
      db[modelName].associate(db);
    }
  });

  // sequelize.sync({force: process.env.NODE_ENV != 'production' && process.env.BUILD_DB == true})
  //   .then(function() {
  //     console.log('Database synchronization done!');
  //   })
  //   .catch(function(error) {
  //     console.log('Database synchronization Fail: ' + error);
  //   });

  return db
}
