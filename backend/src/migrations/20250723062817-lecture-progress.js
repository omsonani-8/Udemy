'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('lecture_progress', {
      user_id:{
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      lecture_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      completed: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
      },
      completedAt: {
        type: Sequelize.DATE,
      },
    });
  },

  async down (queryInterface) {
    await queryInterface.dropTable('lecture_progress');
  }
};
