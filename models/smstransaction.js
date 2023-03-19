'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class SMSTransaction extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  SMSTransaction.init({
    merchantId: DataTypes.STRING,
    status: DataTypes.STRING,
    message: DataTypes.STRING,
    messageId: DataTypes.STRING,
    cost: DataTypes.DECIMAL,
    currency: DataTypes.STRING,
    gatewayUsed: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'SMSTransaction',
  });
  return SMSTransaction;
};
