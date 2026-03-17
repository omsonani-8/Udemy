"use strict";

module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert("roles", [
      {
        name: "student",
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null,
      },
      {
        name: "instructor",
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null,
      },
      {
        name: "admin",
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null,
      }
    ]);
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete("roles", null, {});
  }
};
