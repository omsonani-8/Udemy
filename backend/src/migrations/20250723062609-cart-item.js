'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('cart_items', {
      user_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      course_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      createdAt: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW,
        allowNull: false,
      }
    });
  },

  async down (queryInterface) {
    await queryInterface.dropTable('cart_items');
  }
};
