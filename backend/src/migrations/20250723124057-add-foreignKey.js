'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface) {
    await queryInterface.addConstraint('users', {
      fields: ['role_id'],
      type: 'foreign key', 
      name: 'fk_users_role',
      references: {
        table: 'roles',
        field: 'id'
      },
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE'
    });


    await queryInterface.addConstraint('role_permissions', {
      fields: ['role_id'],
      type: 'foreign key',
      name: 'fk_role_permissions_role',
      references: {
        table: 'roles',
        field: 'id'
      },
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE'
    });

    await queryInterface.addConstraint('role_permissions', {
      fields: ['permission_id'],
      type: 'foreign key',
      name: 'fk_role_permissions_permission',
      references: {
        table: 'permissions',
        field: 'id'
      },
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE'
    });

    await queryInterface.addConstraint('courses', {
      fields: ['instructor_id'],
      type: 'foreign key',
      name: 'fk_courses_instructor',
      references: {
        table: 'users',
        field: 'id'
      },
      onDelete: 'RESTRICT',
      onUpdate: 'CASCADE'
    });

    await queryInterface.addConstraint('courses', {
      fields: ['category_id'],
      type: 'foreign key',
      name: 'fk_courses_category',
      references: {
        table: 'categories',
        field: 'id'
      },
      onDelete: 'RESTRICT',
      onUpdate: 'CASCADE'
    });

    await queryInterface.addConstraint('lectures', {
      fields: ['course_id'],
      type: 'foreign key',
      name: 'fk_lectures_course',
      references: {
        table: 'courses',
        field: 'id'
      },
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE'
    });

    await queryInterface.addConstraint('enrollments', {
      fields: ['user_id'],
      type: 'foreign key',
      name: 'fk_enrollments_user',
      references: {
        table: 'users',
        field: 'id'
      },
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE'
    });

    await queryInterface.addConstraint('enrollments', {
      fields: ['course_id'],
      type: 'foreign key',
      name: 'fk_enrollments_course',
      references: {
        table: 'courses',
        field: 'id'
      },
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE'
    });

    await queryInterface.addConstraint('cart_items', {
      fields: ['user_id'],
      type: 'foreign key',
      name: 'fk_cart_items_user',
      references: {
        table: 'users',
        field: 'id'
      },
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE'
    });

    await queryInterface.addConstraint('cart_items', {
      fields: ['course_id'],
      type: 'foreign key',
      name: 'fk_cart_items_course',
      references: {
        table: 'courses',
        field: 'id'
      },
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE'
    });

    await queryInterface.addConstraint('reviews', {
      fields: ['user_id'],
      type: 'foreign key',
      name: 'fk_reviews_user',
      references: {
        table: 'users',
        field: 'id'
      },
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE'
    });

    await queryInterface.addConstraint('reviews', {
      fields: ['course_id'],
      type: 'foreign key',
      name: 'fk_reviews_course',
      references: {
        table: 'courses',
        field: 'id'
      },
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE'
    });

    await queryInterface.addConstraint('payments', {
      fields: ['user_id'],
      type: 'foreign key',
      name: 'fk_payments_user',
      references: {
        table: 'users',
        field: 'id'
      },
      onDelete: 'RESTRICT',
      onUpdate: 'CASCADE'
    });

    await queryInterface.addConstraint('payments', {
      fields: ['course_id'],
      type: 'foreign key',
      name: 'fk_payments_course',
      references: {
        table: 'courses',
        field: 'id'
      },
      onDelete: 'RESTRICT',
      onUpdate: 'CASCADE'
    });

    await queryInterface.addConstraint('certificates', {
      fields: ['user_id'],
      type: 'foreign key',
      name: 'fk_certificates_user',
      references: {
        table: 'users',
        field: 'id'
      },
      onDelete: 'RESTRICT',
      onUpdate: 'CASCADE'
    });

    await queryInterface.addConstraint('certificates', {
      fields: ['course_id'],
      type: 'foreign key',
      name: 'fk_certificates_course',
      references: {
        table: 'courses',
        field: 'id'
      },
      onDelete: 'RESTRICT',
      onUpdate: 'CASCADE'
    });

    await queryInterface.addConstraint('lecture_progress', {
      fields: ['user_id'],
      type: 'foreign key',
      name: 'fk_lecture_progress_user',
      references: {
        table: 'users',
        field: 'id'
      },
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE'
    });

    await queryInterface.addConstraint('lecture_progress', {
      fields: ['lecture_id'],
      type: 'foreign key',
      name: 'fk_lecture_progress_lecture',
      references: {
        table: 'lectures',
        field: 'id'
      },
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE'
    });
  },

  

  async down (queryInterface) {
    await queryInterface.removeConstraint('users', 'fk_users_role');
    await queryInterface.removeConstraint('role_permissions', 'fk_role_permissions_role');
    await queryInterface.removeConstraint('role_permissions', 'fk_role_permissions_permission');
    await queryInterface.removeConstraint('courses', 'fk_courses_instructor');
    await queryInterface.removeConstraint('courses', 'fk_courses_category');
    await queryInterface.removeConstraint('lectures', 'fk_lectures_course');
    await queryInterface.removeConstraint('enrollments', 'fk_enrollments_user');
    await queryInterface.removeConstraint('enrollments', 'fk_enrollments_course');
    await queryInterface.removeConstraint('cart_items', 'fk_cart_items_user');
    await queryInterface.removeConstraint('cart_items', 'fk_cart_items_course');
    await queryInterface.removeConstraint('reviews', 'fk_reviews_user');
    await queryInterface.removeConstraint('reviews', 'fk_reviews_course');
    await queryInterface.removeConstraint('payments', 'fk_payments_user');
    await queryInterface.removeConstraint('payments', 'fk_payments_course');
    await queryInterface.removeConstraint('certificates', 'fk_certificates_user');
    await queryInterface.removeConstraint('certificates', 'fk_certificates_course');
    await queryInterface.removeConstraint('lecture_progress', 'fk_lecture_progress_user');
    await queryInterface.removeConstraint('lecture_progress', 'fk_lecture_progress_lecture');
  }
};
