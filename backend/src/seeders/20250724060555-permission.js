'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface) {
    await queryInterface.bulkInsert("permissions", [
      { name: "create_course", createdAt: new Date(), updatedAt: new Date() },
      { name: "edit_course", createdAt: new Date(), updatedAt: new Date() },
      { name: "delete_course", createdAt: new Date(), updatedAt: new Date() },
      { name: "enroll_course", createdAt: new Date(), updatedAt: new Date() },
      { name: "publish_course", createdAt: new Date(), updatedAt: new Date() },
      { name: "manage_users", createdAt: new Date(), updatedAt: new Date() },
      { name: "manage_payments", createdAt: new Date(), updatedAt: new Date() },
    ]);
  },

  async down (queryInterface) {
    await queryInterface.bulkDelete("permissions", null, {});
  }
};
