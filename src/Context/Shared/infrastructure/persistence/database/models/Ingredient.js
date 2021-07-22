module.exports = function (sequelize, DataTypes) {
  const Ingredient = sequelize.define('ingredients', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
      allowNull: false
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
  }, {
    freezeTableName: true,
    timestamps: true,
    classMethods: {
      associate () {
        // associations can be defined here
      }
    }
  })

  return Ingredient
}
