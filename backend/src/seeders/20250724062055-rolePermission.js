'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface) {
    await queryInterface.bulkInsert("role_permissions", [

      // Instructor permissions
      { role_id: 2, permission_id: 1 }, // create_course
      { role_id: 2, permission_id: 2 }, // edit_course

      //student
      { role_id: 1, permission_id: 4 }, // enroll_course

      // Admin permissions
      { role_id: 3, permission_id: 3 }, // delete_course
      { role_id: 3, permission_id: 5 }, // publish_course
      { role_id: 3, permission_id: 6 }, // manage_users
      { role_id: 3, permission_id: 7 }, // manage_payments
    ], {});
  },


  async down (queryInterface) {
    await queryInterface.bulkDelete("role_permissions", null, {});
   
  }
};
