'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class EmailTransaction extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  EmailTransaction.init({
    bulkId: DataTypes.STRING,
    messages: DataTypes.ARRAY(DataTypes.JSON)
  }, {
    sequelize,
    modelName: 'EmailTransaction',
  });
  return EmailTransaction;
};