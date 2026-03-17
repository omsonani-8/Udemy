'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('users',{
      id:{
        type:Sequelize.INTEGER,
        primaryKey:true,
        autoIncrement:true
      },
      first_name:{
        type:Sequelize.STRING,
        allowNull:false
      },
      last_name: {
        type:Sequelize.STRING,
        allowNull: false,
      },
      email: {
        type:Sequelize.STRING,
        allowNull: false, 
        unique: true,
        validate: {
          isEmail:true
        }
      },
      password:{
        type:Sequelize.STRING,
        allowNull:false,
      },
      phone_no:{
        type:Sequelize.STRING,
        validate:{
          len:[10,10]
        }
      },
      role_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      profilePicture: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      createdAt: {
        type: Sequelize.DATE,
        defaultValue:Sequelize.NOW,
        allowNull: false,
      },
      updatedAt: {
        type: Sequelize.DATE,
        defaultValue:Sequelize.NOW,
        allowNull: false,
      },
      deletedAt: {
        type: Sequelize.DATE,
      }, 
    },
  );
  
  },

  async down (queryInterface) {
    await queryInterface.dropTable('users');
  }
};
