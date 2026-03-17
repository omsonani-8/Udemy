'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('course_instructor', {
      course_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      instructor_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      role:{
        type: Sequelize.ENUM('leader', 'assistant'),
        allowNull: true,
        defaultValue:"assistant"
      }
    });
  },

  async down (queryInterface) {
    await queryInterface.dropTable('course_instructor');
  }
};
