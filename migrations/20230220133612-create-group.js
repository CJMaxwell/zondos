'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('groups', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.STRING,
        defaultValue: Sequelize.UUIDV4
      },
      contactId: {
        type: Sequelize.STRING,
        references: {
          model: 'Contacts',
          key: 'id',
          as: 'contactId',
        }
      },
      contactGroupId: {
        type: Sequelize.STRING,
        references: {
          model: 'ContactGroups',
          key: 'id',
          as: 'contactGroupId',
        }
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('groups');
  }
};