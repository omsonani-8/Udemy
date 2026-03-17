"use strict";

module.exports = {
  async up (queryInterface) {
    await queryInterface.bulkInsert("users", [
      {
        first_name: "om",
        last_name: "sonani",
        email: "om.sonani@gmail.com",
        password: "1234",
        phone_no: "1234567890",
        role_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null,
      },
      {
        first_name: "om",
        last_name: "sonani",
        email: "om.sonani.1@gmail.com",
        password: "1234",
        phone_no: "0987654321",
        role_id: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null,
      },
      {
        first_name: "Alice",
        last_name: "Johnson",
        email: "alice.johnson@example.com",
        password: "hashed_password_3",
        phone_no: "1122334455",
        profilePicture:"",
        role_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null,
      },
      {
        first_name: "Bob",
        last_name: "Brown",
        email: "bob.brown@example.com",
        password: "hashed_password_4",
        phone_no: "2233445566",
        profilePicture:"",
        role_id: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null,
      },
      {
        first_name: "admin",
        last_name: "1",
        email: "admin@example.com",
        password: "hashed_password_4",
        phone_no: "2233445566",
        profilePicture:"",
        role_id: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null,
      }
    ]);
  },

  async down (queryInterface) {
    await queryInterface.bulkDelete("users", null, {});
  }
};
