'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('courses', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement:true
      },
      title: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      description: {
        type: Sequelize.TEXT,
        allowNull: false,
      },
      price: {
        type: Sequelize.DECIMAL,
        allowNull: false,
      },
      instructor_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      category_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      approved: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
        allowNull: false,
      },
      approver_id: {
        type: Sequelize.INTEGER,
      },
      approvedAt: {
        type: Sequelize.DATE,
      },
      thumbnail: {
        type: Sequelize.STRING,
      },
      createdAt: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW,
        allowNull: false,
      },
      updatedAt: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW,
        allowNull: false,
      },
      deletedAt: {
        type: Sequelize.DATE,
      }, 
    });
  },

  async down (queryInterface) {
    await queryInterface.dropTable('courses');
  }
};
