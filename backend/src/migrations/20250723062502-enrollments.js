'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('enrollments', {
      user_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      course_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      enrolledAt: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW,
        allowNull: false,
      },
      progress: {
        type: Sequelize.STRING,
      },
    });
  },

  async down (queryInterface) {
    await queryInterface.dropTable('enrollments');
  }
};
