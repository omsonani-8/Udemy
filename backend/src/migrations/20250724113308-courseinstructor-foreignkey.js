'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface) {
    await queryInterface.addConstraint('course_instructor', {
      fields: ['course_id'],
      type: 'foreign key', 
      name: 'fk_course_instructor_course',
      references: {
        table: 'courses',
        field: 'id'
      },
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE'
    });

    await queryInterface.addConstraint('course_instructor', {
      fields: ['instructor_id'],
      type: 'foreign key', 
      name: 'fk_course_instructor_instructor',
      references: {
        table: 'users',
        field: 'id'
      },
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE'
    });

  },

  async down (queryInterface) {
    await queryInterface.removeConstraint('course_instructor', 'fk_course_instructor_course');
    await queryInterface.removeConstraint('course_instructor', 'fk_course_instructor_instructor');
   
  }
};
