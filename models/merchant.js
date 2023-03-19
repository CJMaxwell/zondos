'use strict';
const {
  Model, UUIDV4
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Merchant extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Merchant.hasMany(models.Contact, {
        foreignKey: 'merchantId'
      });
      Merchant.hasMany(models.ContactGroup, {
        foreignKey: 'merchantId'
      });
      Merchant.hasMany(models.SMSTransaction, {
        foreignKey: 'merchantId'
      });
    };
  }
  Merchant.init({
    businessName: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    phoneNumber: DataTypes.STRING,
    address: DataTypes.STRING,
    workingHours: DataTypes.JSON,
    logoUrl: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'Merchant',
  });
  return Merchant;
};