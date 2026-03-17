'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('categories', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement:true
      },
      name: {
        type: Sequelize.STRING,
        unique: true,
        allowNull: false,
      },
      description: {
        type: Sequelize.TEXT,
      },
      createdAt: {
        type: Sequelize.DATE,
        defaultValue:Sequelize.NOW,
        allowNull: false,
      },
      updatedAt: {
        type: Sequelize.DATE,
        defaultValue:Sequelize.NOW,
        allowNull: false,
      },
      deletedAt: {
        type: Sequelize.DATE,
      }, 
    });
  },

  async down (queryInterface) {
    await queryInterface.dropTable('categories');
  }
};
