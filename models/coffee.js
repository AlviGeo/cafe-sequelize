'use strict';
module.exports = (sequelize, DataTypes) => {
  const Coffee = sequelize.define('Coffee', {
    coffeeName: DataTypes.STRING,
    bean: DataTypes.STRING,
    method: DataTypes.STRING,
    price: DataTypes.STRING
  }, {});
  Coffee.associate = function(models) {
    // associations can be defined here
  };
  return Coffee;
};