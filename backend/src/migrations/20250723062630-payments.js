'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('payments', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement:true
      },
      user_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      course_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      amount: {
        type: Sequelize.DECIMAL,
        allowNull: false,
      },
      transaction_id: {
        type: Sequelize.STRING,
        unique: true,
      },
      status: {
        type: Sequelize.ENUM('pending', 'completed', 'failed'),
        allowNull: false,
      },
      createdAt: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW,
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
    await queryInterface.dropTable('payments');
  }
};
